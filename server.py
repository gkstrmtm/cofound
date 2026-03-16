import os
from typing import Optional

from flask import Flask, jsonify, request, send_from_directory
from openai import OpenAI


app = Flask(__name__, static_folder=".", static_url_path="")

SYSTEM_PROMPT = (
    "you are anna, an ai co-founder. keep responses concise, actionable, and lowercase. "
    "ask one focused question when needed."
)


def get_api_key_status() -> tuple[Optional[str], str]:
    """Return (api_key, status) where status helps debug missing/empty keys.

    status values:
    - env: present via environment variable
    - env-empty: env var exists but is empty/whitespace
    - dotenv: present via .env file
    - dotenv-empty: .env has OPENAI_API_KEY but it's empty
    - missing: not found in env or .env
    - dotenv-unavailable: python-dotenv isn't installed
    """

    env_present = "OPENAI_API_KEY" in os.environ
    env_key = (os.environ.get("OPENAI_API_KEY") or "").strip()
    if env_key:
        return (env_key, "env")

    try:
        from dotenv import dotenv_values  # type: ignore
    except Exception:
        return (None, "env-empty" if env_present else "dotenv-unavailable")

    values = dotenv_values(os.path.join(os.path.dirname(__file__), ".env"))
    if not values:
        return (None, "env-empty" if env_present else "missing")

    if "OPENAI_API_KEY" not in values:
        return (None, "env-empty" if env_present else "missing")

    key = (values.get("OPENAI_API_KEY") or "").strip()
    return (key or None, "dotenv" if key else "dotenv-empty")


def get_api_key() -> Optional[str]:
    key, _status = get_api_key_status()
    return key


@app.get("/")
def index():
    return send_from_directory(app.static_folder, "index.html")


@app.get("/<path:path>")
def static_proxy(path: str):
    return send_from_directory(app.static_folder, path)


@app.get("/api/health")
def health():
    key, status = get_api_key_status()
    return jsonify(
        {
            "ok": True,
            "has_openai_key": bool(key),
            "openai_key_status": status,
            "openai_model": os.environ.get("OPENAI_MODEL", "gpt-4.1-mini"),
        }
    )


@app.post("/api/chat")
def chat():
    api_key, key_status = get_api_key_status()
    if not api_key:
        hint = "create a .env file with OPENAI_API_KEY=... (or export it before starting the server)"
        if key_status in ("env-empty", "dotenv-empty"):
            hint = "OPENAI_API_KEY is set but empty; open .env and paste your key after OPENAI_API_KEY="
        return (
            jsonify(
                {
                    "error": "missing OPENAI_API_KEY",
                    "hint": hint,
                    "openai_key_status": key_status,
                }
            ),
            500,
        )

    client = OpenAI(api_key=api_key)

    payload = request.get_json(silent=True) or {}
    messages = payload.get("messages")

    if not isinstance(messages, list) or not messages:
        return jsonify({"error": "messages must be a non-empty array"}), 400

    # constrain to only user/assistant roles
    filtered = []
    for msg in messages[-12:]:
        role = msg.get("role")
        content = msg.get("content")
        if role not in ("user", "assistant"):
            continue
        if not isinstance(content, str) or not content.strip():
            continue
        filtered.append({"role": role, "content": content.strip()})

    if not filtered:
        return jsonify({"error": "no valid messages"}), 400

    completion = client.chat.completions.create(
        model=os.environ.get("OPENAI_MODEL", "gpt-4.1-mini"),
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            *filtered,
        ],
        temperature=0.6,
        max_tokens=180,
    )

    reply = completion.choices[0].message.content or ""
    return jsonify({"reply": reply.strip()})


if __name__ == "__main__":
    debug_enabled = os.environ.get("FLASK_DEBUG") == "1"
    app.run(
        host="127.0.0.1",
        port=int(os.environ.get("PORT", "8000")),
        debug=debug_enabled,
        use_reloader=debug_enabled,
    )
