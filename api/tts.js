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

function normalizeErrorDetail(detail, fallback) {
  if (typeof detail === "string") {
    const text = detail.trim();
    return text || fallback;
  }

  if (detail && typeof detail === "object") {
    const nested =
      detail.message ||
      detail.detail ||
      detail.error ||
      detail.status ||
      detail.code ||
      detail.type;
    if (typeof nested === "string" && nested.trim()) {
      return nested.trim();
    }
    try {
      const serialized = JSON.stringify(detail);
      if (serialized && serialized !== "{}") {
        return serialized;
      }
    } catch {
      // ignore
    }
  }

  return fallback;
}

function buildRequestBodies(text, modelId) {
  const requestedModel = String(modelId || "").trim();
  const candidateModels = [
    requestedModel,
    "eleven_flash_v2_5",
    "eleven_turbo_v2_5",
    "eleven_multilingual_v2",
    ""
  ].filter((value, index, list) => list.indexOf(value) === index);

  const bodies = [];
  for (const candidateModel of candidateModels) {
    const base = { text };
    if (candidateModel) {
      base.model_id = candidateModel;
    }

    bodies.push({
      label: `${candidateModel || "default-model"}:voice-settings`,
      body: {
        ...base,
        voice_settings: {
          stability: 0.42,
          similarity_boost: 0.78,
          style: 0.12,
          use_speaker_boost: true
        }
      }
    });

    bodies.push({
      label: `${candidateModel || "default-model"}:plain`,
      body: base
    });
  }

  return bodies;
}

async function requestTtsAudio(apiKey, voiceId, payload) {
  return fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${encodeURIComponent(voiceId)}/stream`,
    {
      method: "POST",
      headers: {
        "xi-api-key": apiKey,
        "Content-Type": "application/json",
        accept: "audio/mpeg"
      },
      body: JSON.stringify(payload)
    }
  );
}

async function requestTtsWithFallbacks(apiKey, voiceId, text, modelId) {
  const attempts = [];

  for (const candidate of buildRequestBodies(text, modelId)) {
    const response = await requestTtsAudio(apiKey, voiceId, candidate.body);
    if (response.ok) {
      return { response, attempts };
    }

    const data = await response.json().catch(() => null);
    const detail = normalizeErrorDetail(
      data && (data.detail || data.error || data.message),
      `elevenlabs http ${response.status}`
    );
    attempts.push(`${candidate.label} -> ${detail}`);
  }

  return { response: null, attempts };
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
    let { response: elevenRes, attempts } = await requestTtsWithFallbacks(apiKey, primaryVoiceId, text, modelId);

    if (!elevenRes && voiceOverride) {
      const fallbackVoiceId = await getVoiceId(apiKey);
      if (fallbackVoiceId && fallbackVoiceId !== primaryVoiceId) {
        const retried = await requestTtsWithFallbacks(apiKey, fallbackVoiceId, text, modelId);
        if (retried.response) {
          elevenRes = retried.response;
          attempts = attempts.concat(retried.attempts);
        } else {
          attempts = attempts.concat(retried.attempts.map((entry) => `fallback-voice ${entry}`));
        }
      }
    }

    if (!elevenRes) {
      const detail = attempts.length
        ? attempts.join(" | ")
        : "elevenlabs request failed";
      return res.status(500).json({ error: "elevenlabs request failed", detail });
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
