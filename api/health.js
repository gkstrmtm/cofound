/**
 * Vercel Serverless Function
 * GET /api/health
 */

const { getElevenLabsKey } = require("./_elevenlabs");
const { getSupabaseUrl, resolveSupabaseAdminKey, resolveSupabasePublicKey } = require("./_supabase");

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
  const hasSupabaseUrl = Boolean(getSupabaseUrl());
  const { hasAdminKey } = resolveSupabaseAdminKey();

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
    has_supabase_public_key: Boolean(supabase.key),
    has_supabase_admin_key: hasAdminKey,
    supabase_key_error: supabase.looksSecret
      ? "supabase secret key cannot be used in the browser; use the anon public key"
      : null
  });
};
