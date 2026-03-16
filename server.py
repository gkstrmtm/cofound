import os
import json
from typing import Optional
from urllib import error as urlerror
from urllib import request as urlrequest

from flask import Flask, jsonify, request, send_from_directory
from openai import OpenAI


app = Flask(__name__, static_folder=".", static_url_path="")

SYSTEM_PROMPT = (
    "you are anna, a world-class co-founder and operator. sound like a sharp human teammate, "
    "not a chatbot. be warm but unsentimental. keep everything lowercase. be concise, specific, "
    "and commercially smart. pressure-test weak ideas, call out fuzzy thinking, and don't validate "
    "bad assumptions just to be nice. avoid cringe ai phrases, therapy-speak, hype, and empty "
    "encouragement. when useful, give frameworks, tradeoffs, numbers, experiments, positioning, "
    "pricing, distribution, product strategy, and execution steps. prefer clear judgment over hedging. "
    "ask at most one high-leverage question when you truly need missing information. if the user's "
    "idea is weak, say why and suggest a stronger direction."
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


def get_supabase_public_key() -> tuple[Optional[str], bool]:
    candidates = [
        (os.environ.get("SUPABASE_ANON_KEY") or "").strip(),
        (os.environ.get("SUPABASE_PUBLISHABLE_KEY") or "").strip(),
        (os.environ.get("NEXT_PUBLIC_SUPABASE_ANON_KEY") or "").strip(),
        (os.environ.get("NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY") or "").strip(),
    ]
    key = next((value for value in candidates if value), "")
    looks_secret = key.lower().startswith("sb_secret_") or "service_role" in key.lower() or "service-role" in key.lower()
    return ((None if looks_secret or not key else key), looks_secret)


def get_supabase_admin_key() -> Optional[str]:
    candidates = [
        (os.environ.get("SUPABASE_SERVICE_ROLE_KEY") or "").strip(),
        (os.environ.get("SUPABASE_SECRET_KEY") or "").strip(),
        (os.environ.get("SUPABASE_SERVICE_KEY") or "").strip(),
    ]
    direct = next((value for value in candidates if value), "")
    if direct:
        return direct

    fallback = (os.environ.get("SUPABASE_ANON_KEY") or "").strip()
    if fallback.lower().startswith("sb_secret_") or "service_role" in fallback.lower() or "service-role" in fallback.lower():
        return fallback
    return None


def post_json(url: str, headers: dict[str, str], body: dict) -> tuple[int, dict]:
    req = urlrequest.Request(
        url,
        data=json.dumps(body).encode("utf-8"),
        headers=headers,
        method="POST",
    )
    try:
        with urlrequest.urlopen(req) as response:
            payload = response.read().decode("utf-8")
            return response.status, json.loads(payload or "{}")
    except urlerror.HTTPError as exc:
        payload = exc.read().decode("utf-8")
        try:
            return exc.code, json.loads(payload or "{}")
        except Exception:
            return exc.code, {"error": payload or f"http {exc.code}"}


@app.get("/")
def index():
    return send_from_directory(app.static_folder, "index.html")


@app.get("/<path:path>")
def static_proxy(path: str):
    return send_from_directory(app.static_folder, path)


@app.get("/api/health")
def health():
    key, status = get_api_key_status()
    supabase_public_key, supabase_looks_secret = get_supabase_public_key()
    return jsonify(
        {
            "ok": True,
            "has_openai_key": bool(key),
            "openai_key_status": status,
            "openai_model": os.environ.get("OPENAI_MODEL", "gpt-4.1-mini"),
            "has_supabase": bool(
                (os.environ.get("SUPABASE_URL") or "").strip() and supabase_public_key
            ),
            "supabase_key_error": (
                "supabase secret key cannot be used in the browser; use the anon public key"
                if supabase_looks_secret
                else None
            ),
        }
    )


@app.get("/api/public-config")
def public_config():
    supabase_public_key, supabase_looks_secret = get_supabase_public_key()
    return jsonify(
        {
            "ok": True,
            "supabaseUrl": (os.environ.get("SUPABASE_URL") or "").strip(),
            "supabaseAnonKey": supabase_public_key or "",
            "hasSupabase": bool(
                (os.environ.get("SUPABASE_URL") or "").strip() and supabase_public_key
            ),
            "supabaseKeyError": (
                "supabase secret key cannot be used in the browser; use the anon public key"
                if supabase_looks_secret
                else None
            ),
        }
    )


@app.post("/api/auth-signup")
def auth_signup():
    payload = request.get_json(silent=True) or {}
    email = (payload.get("email") or "").strip().lower()
    password = payload.get("password") or ""
    name = (payload.get("name") or "").strip()
    redirect_to = (payload.get("redirectTo") or "").strip()

    if not email:
        return jsonify({"ok": False, "error": "email required"}), 400
    if not password or len(password) < 8:
        return jsonify({"ok": False, "error": "password must be at least 8 characters"}), 400

    supabase_url = (os.environ.get("SUPABASE_URL") or "").strip()
    if not supabase_url:
        return jsonify({"ok": False, "error": "missing SUPABASE_URL"}), 500

    admin_key = get_supabase_admin_key()
    if admin_key:
        status, data = post_json(
            f"{supabase_url}/auth/v1/admin/users",
            {
                "apikey": admin_key,
                "Authorization": f"Bearer {admin_key}",
                "Content-Type": "application/json",
            },
            {
                "email": email,
                "password": password,
                "email_confirm": True,
                "user_metadata": {"name": name},
            },
        )
        if status >= 400:
            detail = data.get("msg") or data.get("message") or data.get("error_description") or data.get("error") or f"http {status}"
            return jsonify({"ok": False, "error": str(detail)}), 400
        return jsonify({"ok": True, "autoConfirmed": True, "requiresEmailConfirmation": False})

    public_key, looks_secret = get_supabase_public_key()
    if not public_key:
        return jsonify({
            "ok": False,
            "error": "supabase public key is missing" if not looks_secret else "supabase public key slot contains a secret key",
        }), 500

    status, data = post_json(
        f"{supabase_url}/auth/v1/signup",
        {
            "apikey": public_key,
            "Authorization": f"Bearer {public_key}",
            "Content-Type": "application/json",
        },
        {
            "email": email,
            "password": password,
            "data": {"name": name},
            "email_redirect_to": redirect_to or None,
        },
    )
    if status >= 400:
        detail = data.get("msg") or data.get("message") or data.get("error_description") or data.get("error") or f"http {status}"
        return jsonify({"ok": False, "error": str(detail)}), 400

    return jsonify({
        "ok": True,
        "autoConfirmed": False,
        "requiresEmailConfirmation": not bool(data.get("session")),
        "redirectTo": redirect_to or None,
    })


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
