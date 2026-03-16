# cofound

single-screen anna prototype.

this repo is set up for vercel:

- static frontend at `/` (index.html)
- serverless api at `/api/health` and `/api/chat`

## vercel env vars

set these in vercel project settings → environment variables:

- `OPENAI_API_KEY` (required)
- `OPENAI_MODEL` (optional, default `gpt-4.1-mini`)
- `SUPABASE_URL` (recommended for real auth + saved progress)
- `SUPABASE_ANON_KEY` or `SUPABASE_PUBLISHABLE_KEY` (recommended for real auth + saved progress)
- `SUPABASE_SERVICE_ROLE_KEY` or `SUPABASE_SECRET_KEY` (optional, enables server-side auto-confirm signup so email confirmation can effectively be skipped)

deployments will auto-pick them up; you’ll paste real values in vercel.

## supabase setup

if you want sign-up/sign-in and progress to actually persist across devices, create a supabase project and do this:

1. in supabase sql editor, run [supabase/schema.sql](supabase/schema.sql)
2. copy your project url into `SUPABASE_URL`
3. in supabase dashboard → project settings → api, copy the `anon public` key (or publishable key) into `SUPABASE_ANON_KEY` or `SUPABASE_PUBLISHABLE_KEY`
4. either:
	- disable email confirmation in supabase auth settings, or
	- set `SUPABASE_SERVICE_ROLE_KEY` / `SUPABASE_SECRET_KEY` in your server env so the app can auto-confirm signups for you

do not use the secret key here. the secret/service-role key cannot safely go to the browser, and the app now intentionally rejects it from `/api/public-config`.

if you do set a secret/service-role key, keep it server-side only. the app uses it only through `/api/auth-signup` to create auto-confirmed users and avoid the broken email-confirm loop.

the app stores one synced state blob per signed-in email, which includes:

- profile fields
- startup name
- startup lists
- task notes / subtasks / completion state
- anna memory log and active task context

## local dev

frontend-only (no ai): open `index.html`.

to test `/api/*` locally, either deploy to vercel preview or use `vercel dev` if you have the vercel cli installed.

the optional flask server also exposes `/api/public-config`, so local supabase auth works there too if your `.env` contains the supabase vars.

## files

- `index.html` - ui
- `styles.css` - styling
- `app.js` - mic transcript + calls `/api/chat`
- `api/health.js` - env check
- `api/chat.js` - openai call (reads env vars)

(optional legacy local server)

- `server.py` - flask version of the api for python-only local runs
