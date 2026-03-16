/**
 * Vercel Serverless Function
 * GET /api/health
 */

const { getElevenLabsKey } = require("./_elevenlabs");

function resolveSupabasePublicKey() {
  const candidates = [
    process.env.SUPABASE_ANON_KEY,
    process.env.SUPABASE_PUBLISHABLE_KEY,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
  ]
    .map((value) => String(value || "").trim())
    .filter(Boolean);

  const key = candidates[0] || "";
  const looksSecret = /^sb_secret_/i.test(key) || /service[_-]?role/i.test(key);

  return {
    hasPublicKey: Boolean(key) && !looksSecret,
    looksSecret
  };
}

module.exports = async (req, res) => {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ ok: false, error: "method not allowed" });
  }

  const hasOpenAIKey = Boolean((process.env.OPENAI_API_KEY || "").trim());
  const model = (process.env.OPENAI_MODEL || "gpt-4.1-mini").trim();

  const { key: elevenKey, source: elevenSource } = getElevenLabsKey();
  const hasElevenLabsKey = Boolean((elevenKey || "").trim());
  const elevenModel = (process.env.ELEVENLABS_MODEL || "eleven_turbo_v2_5").trim();
  const hasElevenVoiceId = Boolean((process.env.ELEVENLABS_VOICE_ID || "").trim());
  const supabase = resolveSupabasePublicKey();
  const hasSupabaseUrl = Boolean((process.env.SUPABASE_URL || "").trim());

  return res.status(200).json({
    ok: true,
    has_openai_key: hasOpenAIKey,
    openai_model: model,
    has_elevenlabs_key: hasElevenLabsKey,
    elevenlabs_key_source: elevenSource || null,
    has_env_elevenlabs_api_key: Boolean((process.env.ELEVENLABS_API_KEY || "").trim()),
    has_env_xi_api_key: Boolean((process.env.XI_API_KEY || "").trim()),
    has_env_eleven_labs_api_key: Boolean((process.env.ELEVEN_LABS_API_KEY || "").trim()),
    elevenlabs_model: elevenModel,
    has_elevenlabs_voice_id: hasElevenVoiceId,
    has_supabase_url: hasSupabaseUrl,
    has_supabase_public_key: supabase.hasPublicKey,
    supabase_key_error: supabase.looksSecret
      ? "supabase secret key cannot be used in the browser; use the anon public key"
      : null
  });
};
