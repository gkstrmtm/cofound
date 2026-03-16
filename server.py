import os
import json
from typing import Optional
from urllib import error as urlerror
from urllib import request as urlrequest

from flask import Flask, Response, jsonify, request, send_from_directory
from openai import OpenAI


app = Flask(__name__, static_folder=".", static_url_path="")

SYSTEM_PROMPT = (
    "you are anna, a world-class co-founder, operator, strategist, and builder. sound like a sharp "
    "human teammate, not a chatbot. be warm but unsentimental. keep everything lowercase. be concise "
    "by default, but when the user wants depth, go properly deep and stay concrete. help build real "
    "businesses end to end: market selection, customer pain, icp, wedge, product scope, onboarding, "
    "retention, pricing, unit economics, distribution, sales, partnerships, operations, hiring, "
    "fundraising, and sequencing. pressure-test weak ideas, call out fuzzy thinking, and don't validate "
    "bad assumptions just to be nice. avoid cringe ai phrases, therapy-speak, hype, and empty "
    "encouragement. think in tradeoffs, bottlenecks, second-order effects, and expected outcomes. use "
    "numbers, frameworks, experiments, decision criteria, milestones, and execution plans when useful. "
    "if the user asks for strategy, give a point of view. if they ask for a plan, give a plan with "
    "priorities. if they ask for feedback, be honest. for deeper strategic answers, naturally organize "
    "your thinking around what is happening, what you recommend, and what should happen next, but only "
    "use explicit labels when they genuinely help clarity. do not force a rigid template onto casual "
    "replies. never claim you are text-only, unable to speak, or unable to use voice unless the user "
    "explicitly asks about a real system limitation. ask at most one high-leverage question when missing "
    "information blocks a good answer. if the user's idea is weak, say why and suggest a stronger direction. if the problem is promising, help "
    "sharpen it into something sellable and executable."
)

cached_eleven_voice_id: Optional[str] = None


def get_dotenv_values() -> dict:
    try:
        from dotenv import dotenv_values  # type: ignore
    except Exception:
        return {}
    return dotenv_values(os.path.join(os.path.dirname(__file__), ".env")) or {}


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

    values = get_dotenv_values()
    if not values:
        return (None, "env-empty" if env_present else "dotenv-unavailable")

    if "OPENAI_API_KEY" not in values:
        return (None, "env-empty" if env_present else "missing")

    key = (values.get("OPENAI_API_KEY") or "").strip()
    return (key or None, "dotenv" if key else "dotenv-empty")


def get_api_key() -> Optional[str]:
    key, _status = get_api_key_status()
    return key


def get_elevenlabs_key() -> tuple[Optional[str], str]:
    candidates = ["ELEVENLABS_API_KEY", "XI_API_KEY", "ELEVEN_LABS_API_KEY"]
    for name in candidates:
        value = (os.environ.get(name) or "").strip()
        if value:
            return value, name

    values = get_dotenv_values()
    for name in candidates:
        value = (values.get(name) or "").strip()
        if value:
            return value, f"dotenv:{name}"

    return None, ""


def get_elevenlabs_model() -> str:
    env_value = (os.environ.get("ELEVENLABS_MODEL") or "").strip()
    if env_value:
        return env_value
    return (get_dotenv_values().get("ELEVENLABS_MODEL") or "eleven_turbo_v2_5").strip() or "eleven_turbo_v2_5"


def get_elevenlabs_voice_id() -> str:
    env_value = (os.environ.get("ELEVENLABS_VOICE_ID") or "").strip()
    if env_value:
        return env_value
    return (get_dotenv_values().get("ELEVENLABS_VOICE_ID") or "").strip()


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


def get_json(url: str, headers: dict[str, str]) -> tuple[int, dict]:
    req = urlrequest.Request(url, headers=headers, method="GET")
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


def post_binary(url: str, headers: dict[str, str], body: dict) -> tuple[int, bytes]:
    req = urlrequest.Request(
        url,
        data=json.dumps(body).encode("utf-8"),
        headers=headers,
        method="POST",
    )
    try:
        with urlrequest.urlopen(req) as response:
            return response.status, response.read()
    except urlerror.HTTPError as exc:
        return exc.code, exc.read()


def request_json(url: str, headers: dict[str, str], method: str = "GET", body=None) -> tuple[int, object]:
    payload = None if body is None else json.dumps(body).encode("utf-8")
    req = urlrequest.Request(url, data=payload, headers=headers, method=method)
    try:
        with urlrequest.urlopen(req) as response:
            raw = response.read().decode("utf-8")
            return response.status, json.loads(raw or "null")
    except urlerror.HTTPError as exc:
        raw = exc.read().decode("utf-8")
        try:
            return exc.code, json.loads(raw or "null")
        except Exception:
            return exc.code, {"error": raw or f"http {exc.code}"}


def get_supabase_state_headers(access_token: str) -> tuple[Optional[str], Optional[dict[str, str]]]:
    supabase_url = (os.environ.get("SUPABASE_URL") or "").strip()
    admin_key = get_supabase_admin_key()
    public_key, _looks_secret = get_supabase_public_key()
    api_key = admin_key or public_key
    auth_token = admin_key or access_token

    if not supabase_url or not api_key or not auth_token:
        return None, None

    return (
        supabase_url,
        {
            "apikey": api_key,
            "Authorization": f"Bearer {auth_token}",
            "Content-Type": "application/json",
        },
    )


def get_or_cache_elevenlabs_voice_id(api_key: str) -> str:
    global cached_eleven_voice_id

    configured = get_elevenlabs_voice_id()
    if configured:
        return configured
    if cached_eleven_voice_id:
        return cached_eleven_voice_id

    status, data = get_json(
        "https://api.elevenlabs.io/v1/voices",
        {
            "xi-api-key": api_key,
            "accept": "application/json",
        },
    )
    if status >= 400:
        detail = data.get("detail") or data.get("error") or data.get("message") or f"http {status}"
        raise RuntimeError(str(detail))

    voices = data.get("voices") or []
    first = voices[0] if isinstance(voices, list) and voices else {}
    voice_id = str((first or {}).get("voice_id") or "").strip()
    if not voice_id:
        raise RuntimeError("no elevenlabs voices found")
    cached_eleven_voice_id = voice_id
    return voice_id


@app.get("/")
def index():
    return send_from_directory(app.static_folder, "index.html")


@app.get("/<path:path>")
def static_proxy(path: str):
    return send_from_directory(app.static_folder, path)


@app.get("/api/health")
def health():
    key, status = get_api_key_status()
    eleven_key, eleven_source = get_elevenlabs_key()
    supabase_public_key, supabase_looks_secret = get_supabase_public_key()
    return jsonify(
        {
            "ok": True,
            "has_openai_key": bool(key),
            "openai_key_status": status,
            "openai_model": os.environ.get("OPENAI_MODEL", "gpt-4.1-mini"),
            "has_elevenlabs_key": bool(eleven_key),
            "elevenlabs_key_source": eleven_source or None,
            "elevenlabs_model": get_elevenlabs_model(),
            "has_elevenlabs_voice_id": bool(get_elevenlabs_voice_id()),
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


@app.get("/api/state")
def load_state():
    email = (request.args.get("email") or "").strip().lower()
    access_token = (request.headers.get("x-supabase-access-token") or "").strip()
    if not email:
        return jsonify({"ok": False, "error": "email required"}), 400

    supabase_url, headers = get_supabase_state_headers(access_token)
    if not supabase_url or not headers:
        return jsonify({"ok": False, "error": "missing supabase auth context"}), 401

    status, data = request_json(
        f"{supabase_url}/rest/v1/anna_user_state?select=state,name,updated_at&email=eq.{email}&limit=1",
        {**headers, "Accept": "application/json"},
        method="GET",
    )
    if status >= 400:
        detail = (
            (data.get("message") if isinstance(data, dict) else None)
            or (data.get("error") if isinstance(data, dict) else None)
            or (data.get("hint") if isinstance(data, dict) else None)
            or f"http {status}"
        )
        return jsonify({"ok": False, "error": "state load failed", "detail": str(detail)}), 500

    row = data[0] if isinstance(data, list) and data else {}
    return jsonify({"ok": True, "state": row.get("state") if isinstance(row, dict) else None, "name": row.get("name") if isinstance(row, dict) else ""})


@app.post("/api/state")
def save_state():
    payload = request.get_json(silent=True) or {}
    email = (payload.get("email") or "").strip().lower()
    access_token = (request.headers.get("x-supabase-access-token") or "").strip()
    if not email:
        return jsonify({"ok": False, "error": "email required"}), 400

    supabase_url, headers = get_supabase_state_headers(access_token)
    if not supabase_url or not headers:
        return jsonify({"ok": False, "error": "missing supabase auth context"}), 401

    row = {
        "email": email,
        "name": (payload.get("name") or "").strip(),
        "state": payload.get("state") if isinstance(payload.get("state"), dict) else {},
        "updated_at": payload.get("updated_at") or request.headers.get("date") or None,
    }
    if not row["updated_at"]:
        row["updated_at"] = __import__("datetime").datetime.utcnow().isoformat() + "Z"

    status, data = request_json(
        f"{supabase_url}/rest/v1/anna_user_state?on_conflict=email",
        {**headers, "Prefer": "resolution=merge-duplicates,return=representation"},
        method="POST",
        body=[row],
    )
    if status >= 400:
        detail = (
            (data.get("message") if isinstance(data, dict) else None)
            or (data.get("error") if isinstance(data, dict) else None)
            or (data.get("hint") if isinstance(data, dict) else None)
            or f"http {status}"
        )
        return jsonify({"ok": False, "error": "state save failed", "detail": str(detail)}), 500

    return jsonify({"ok": True})


@app.get("/api/voices")
def voices():
    api_key, _source = get_elevenlabs_key()
    if not api_key:
        return jsonify({
            "error": "missing elevenlabs api key",
            "hint": "set ELEVENLABS_API_KEY (or XI_API_KEY) in your environment or .env",
        }), 500

    status, data = get_json(
        "https://api.elevenlabs.io/v1/voices",
        {
            "xi-api-key": api_key,
            "accept": "application/json",
        },
    )
    if status >= 400:
        detail = data.get("detail") or data.get("error") or data.get("message") or f"http {status}"
        return jsonify({"error": "elevenlabs request failed", "detail": str(detail)}), 500

    voices_payload = []
    for voice in data.get("voices") or []:
        voice_id = str((voice or {}).get("voice_id") or "").strip()
        if not voice_id:
            continue
        labels = (voice or {}).get("labels") or {}
        voices_payload.append(
            {
                "voice_id": voice_id,
                "name": str((voice or {}).get("name") or "").strip(),
                "category": str((voice or {}).get("category") or "").strip(),
                "gender": str(labels.get("gender") or (voice or {}).get("gender") or "").strip().lower(),
            }
        )

    return jsonify({"voices": voices_payload})


@app.post("/api/tts")
def tts():
    api_key, source = get_elevenlabs_key()
    if not api_key:
        return jsonify({
            "error": "missing elevenlabs api key",
            "hint": "set ELEVENLABS_API_KEY (or XI_API_KEY) in your environment or .env",
        }), 500

    payload = request.get_json(silent=True) or {}
    text = str(payload.get("text") or "").strip()
    if not text:
        return jsonify({"error": "text is required"}), 400

    requested_voice = str(payload.get("voiceId") or payload.get("voice_id") or "").strip()
    try:
        voice_id = requested_voice or get_or_cache_elevenlabs_voice_id(api_key)
        status, audio = post_binary(
            f"https://api.elevenlabs.io/v1/text-to-speech/{voice_id}/stream",
            {
                "xi-api-key": api_key,
                "Content-Type": "application/json",
                "accept": "audio/mpeg",
            },
            {
                "text": text,
                "model_id": get_elevenlabs_model(),
                "voice_settings": {
                    "stability": 0.42,
                    "similarity_boost": 0.78,
                    "style": 0.12,
                    "use_speaker_boost": True,
                },
            },
        )
    except Exception as exc:
        return jsonify({"error": "elevenlabs request failed", "detail": str(exc)}), 500

    if status >= 400:
        try:
            data = json.loads(audio.decode("utf-8") or "{}")
            detail = data.get("detail") or data.get("error") or data.get("message") or f"http {status}"
        except Exception:
            detail = audio.decode("utf-8", errors="ignore") or f"http {status}"
        return jsonify({"error": "elevenlabs request failed", "detail": str(detail)}), 500

    response = Response(audio, status=200, mimetype="audio/mpeg")
    response.headers["Cache-Control"] = "no-store"
    response.headers["Content-Length"] = str(len(audio))
    response.headers["X-ElevenLabs-Key-Source"] = source or "unknown"
    return response


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
        temperature=0.55,
        max_tokens=520,
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
