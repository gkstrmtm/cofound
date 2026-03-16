/**
 * Vercel Serverless Function
 * GET /api/health
 */

const crypto = require("crypto");

const { getElevenLabsKey } = require("./_elevenlabs");
const { getSupabaseUrl, resolveSupabaseAdminKey, resolveSupabasePublicKey } = require("./_supabase");

function getKeyFingerprint(value) {
  const key = String(value || "").trim();
  if (!key) {
    return null;
  }
  return crypto.createHash("sha256").update(key).digest("hex").slice(0, 12);
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
  const hasSupabaseUrl = Boolean(getSupabaseUrl());
  const { hasAdminKey } = resolveSupabaseAdminKey();

  let elevenlabsSubscription = null;
  let elevenlabsSubscriptionError = null;

  if (hasElevenLabsKey) {
    try {
      const subscriptionRes = await fetch("https://api.elevenlabs.io/v1/user/subscription", {
        headers: {
          "xi-api-key": elevenKey,
          accept: "application/json"
        }
      });

      const subscriptionData = await subscriptionRes.json().catch(() => null);
      if (!subscriptionRes.ok) {
        elevenlabsSubscriptionError =
          (subscriptionData && (subscriptionData.detail || subscriptionData.error || subscriptionData.message)) ||
          `elevenlabs http ${subscriptionRes.status}`;
      } else if (subscriptionData && typeof subscriptionData === "object") {
        elevenlabsSubscription = {
          tier: String(subscriptionData.tier || "").trim() || null,
          status: String(subscriptionData.status || "").trim() || null,
          character_count: Number(subscriptionData.character_count || 0) || 0,
          character_limit: Number(subscriptionData.character_limit || 0) || 0,
          can_extend_character_limit: Boolean(subscriptionData.can_extend_character_limit),
          allowed_to_extend_character_limit: Boolean(subscriptionData.allowed_to_extend_character_limit),
          next_character_count_reset_unix: Number(subscriptionData.next_character_count_reset_unix || 0) || 0
        };
      }
    } catch (err) {
      elevenlabsSubscriptionError = err && err.message ? String(err.message) : "couldn't load elevenlabs subscription";
    }
  }

  return res.status(200).json({
    ok: true,
    has_openai_key: hasOpenAIKey,
    openai_model: model,
    has_elevenlabs_key: hasElevenLabsKey,
    elevenlabs_key_source: elevenSource || null,
    has_env_elevenlabs_api_key: Boolean((process.env.ELEVENLABS_API_KEY || "").trim()),
    has_env_xi_api_key: Boolean((process.env.XI_API_KEY || "").trim()),
    has_env_eleven_labs_api_key: Boolean((process.env.ELEVEN_LABS_API_KEY || "").trim()),
    elevenlabs_key_fingerprint: getKeyFingerprint(elevenKey),
    elevenlabs_model: elevenModel,
    has_elevenlabs_voice_id: hasElevenVoiceId,
    elevenlabs_subscription: elevenlabsSubscription,
    elevenlabs_subscription_error: elevenlabsSubscriptionError,
    has_supabase_url: hasSupabaseUrl,
    has_supabase_public_key: Boolean(supabase.key),
    has_supabase_admin_key: hasAdminKey,
    supabase_key_error: supabase.looksSecret
      ? "supabase secret key cannot be used in the browser; use the anon public key"
      : null
  });
};
