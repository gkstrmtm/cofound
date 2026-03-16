/**
 * Vercel Serverless Function
 * POST /api/tts
 *
 * Expects JSON: { text: string }
 * Returns: audio/mpeg
 *
 * Env:
 * - ELEVENLABS_API_KEY (required)
 * - ELEVENLABS_VOICE_ID (optional; if missing, first available voice is used)
 * - ELEVENLABS_MODEL (optional; default: eleven_turbo_v2_5)
 */

let cachedVoiceId = null;

const { getElevenLabsKey } = require("./_elevenlabs");

async function requestTtsAudio(apiKey, voiceId, text, modelId) {
  return fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${encodeURIComponent(voiceId)}/stream`,
    {
      method: "POST",
      headers: {
        "xi-api-key": apiKey,
        "Content-Type": "application/json",
        accept: "audio/mpeg"
      },
      body: JSON.stringify({
        text,
        model_id: modelId,
        voice_settings: {
          stability: 0.42,
          similarity_boost: 0.78,
          style: 0.12,
          use_speaker_boost: true
        }
      })
    }
  );
}

async function getVoiceId(apiKey) {
  const envVoiceId = (process.env.ELEVENLABS_VOICE_ID || "").trim();
  if (envVoiceId) {
    return envVoiceId;
  }

  if (cachedVoiceId) {
    return cachedVoiceId;
  }

  const voicesRes = await fetch("https://api.elevenlabs.io/v1/voices", {
    headers: {
      "xi-api-key": apiKey,
      accept: "application/json"
    }
  });

  const voicesData = await voicesRes.json().catch(() => null);
  if (!voicesRes.ok) {
    const detail =
      (voicesData && (voicesData.detail || voicesData.error || voicesData.message)) ||
      `elevenlabs http ${voicesRes.status}`;
    throw new Error(String(detail));
  }

  const first = voicesData && voicesData.voices && voicesData.voices[0];
  const voiceId = first && first.voice_id ? String(first.voice_id) : "";
  if (!voiceId) {
    throw new Error("no elevenlabs voices found");
  }

  cachedVoiceId = voiceId;
  return voiceId;
}

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "method not allowed" });
  }

  const { key: apiKey, source } = getElevenLabsKey();
  if (!apiKey) {
    return res.status(500).json({
      error: "missing elevenlabs api key",
      hint: "set ELEVENLABS_API_KEY (or XI_API_KEY) in vercel project settings (environment variables)"
    });
  }

  let payload = {};
  try {
    payload = typeof req.body === "object" && req.body ? req.body : JSON.parse(req.body || "{}");
  } catch {
    return res.status(400).json({ error: "invalid json" });
  }

  const text = typeof payload.text === "string" ? payload.text.trim() : "";
  if (!text) {
    return res.status(400).json({ error: "text is required" });
  }

  const requestedVoiceId =
    (typeof payload.voiceId === "string" ? payload.voiceId : "") ||
    (typeof payload.voice_id === "string" ? payload.voice_id : "");
  const voiceOverride = String(requestedVoiceId || "").trim();

  const modelId = (process.env.ELEVENLABS_MODEL || "eleven_turbo_v2_5").trim();

  try {
    const primaryVoiceId = voiceOverride || (await getVoiceId(apiKey));
    let elevenRes = await requestTtsAudio(apiKey, primaryVoiceId, text, modelId);

    if (!elevenRes.ok && voiceOverride) {
      const fallbackVoiceId = await getVoiceId(apiKey);
      if (fallbackVoiceId && fallbackVoiceId !== primaryVoiceId) {
        elevenRes = await requestTtsAudio(apiKey, fallbackVoiceId, text, modelId);
      }
    }

    if (!elevenRes.ok) {
      const data = await elevenRes.json().catch(() => null);
      const detail =
        (data && (data.detail || data.error || data.message)) ||
        `elevenlabs http ${elevenRes.status}`;
      return res.status(500).json({ error: "elevenlabs request failed", detail: String(detail) });
    }

    const audioBuffer = Buffer.from(await elevenRes.arrayBuffer());
    res.setHeader("Content-Type", "audio/mpeg");
    res.setHeader("Cache-Control", "no-store");
    res.setHeader("Content-Length", String(audioBuffer.length));
    res.setHeader("X-ElevenLabs-Key-Source", source || "unknown");
    return res.status(200).send(audioBuffer);
  } catch (err) {
    const message = err && err.message ? String(err.message) : "elevenlabs request failed";
    return res.status(500).json({ error: "elevenlabs request failed", detail: message });
  }
};
