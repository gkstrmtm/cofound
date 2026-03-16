/**
 * Vercel Serverless Function
 * GET /api/health
 */

module.exports = async (req, res) => {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ ok: false, error: "method not allowed" });
  }

  const hasOpenAIKey = Boolean((process.env.OPENAI_API_KEY || "").trim());
  const model = (process.env.OPENAI_MODEL || "gpt-4.1-mini").trim();

  const hasElevenLabsKey = Boolean((process.env.ELEVENLABS_API_KEY || "").trim());
  const elevenModel = (process.env.ELEVENLABS_MODEL || "eleven_turbo_v2_5").trim();
  const hasElevenVoiceId = Boolean((process.env.ELEVENLABS_VOICE_ID || "").trim());

  return res.status(200).json({
    ok: true,
    has_openai_key: hasOpenAIKey,
    openai_model: model,
    has_elevenlabs_key: hasElevenLabsKey,
    elevenlabs_model: elevenModel,
    has_elevenlabs_voice_id: hasElevenVoiceId
  });
};
