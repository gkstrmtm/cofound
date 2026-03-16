# cofound

single-screen anna prototype.

this repo is set up for vercel:

- static frontend at `/` (index.html)
- serverless api at `/api/health` and `/api/chat`

## vercel env vars

set these in vercel project settings → environment variables:

- `OPENAI_API_KEY` (required)
- `OPENAI_MODEL` (optional, default `gpt-4.1-mini`)

deployments will auto-pick them up; you’ll paste real values in vercel.

## local dev

frontend-only (no ai): open `index.html`.

to test `/api/*` locally, either deploy to vercel preview or use `vercel dev` if you have the vercel cli installed.

## files

- `index.html` — ui
- `styles.css` — styling
- `app.js` — mic transcript + calls `/api/chat`
- `api/health.js` — env check
- `api/chat.js` — openai call (reads env vars)

(optional legacy local server)

- `server.py` — flask version of the api for python-only local runs
