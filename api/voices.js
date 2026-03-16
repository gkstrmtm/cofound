/**
 * Vercel Serverless Function
 * GET /api/voices
 * Returns JSON: { voices: [{ voice_id, name, category }] }
 */

const { getElevenLabsKey } = require("./_elevenlabs");

let cached = null;
let cachedAt = 0;

module.exports = async (req, res) => {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ ok: false, error: "method not allowed" });
  }

  const { key: apiKey } = getElevenLabsKey();
  if (!apiKey) {
    return res.status(500).json({
      error: "missing elevenlabs api key",
      hint: "set ELEVENLABS_API_KEY (or XI_API_KEY) in vercel project settings (environment variables)"
    });
  }

  const now = Date.now();
  if (cached && now - cachedAt < 60_000) {
    return res.status(200).json(cached);
  }

  try {
    const voicesRes = await fetch("https://api.elevenlabs.io/v1/voices", {
      headers: {
        "xi-api-key": apiKey,
        accept: "application/json"
      }
    });

    const data = await voicesRes.json().catch(() => null);
    if (!voicesRes.ok) {
      const detail =
        (data && (data.detail || data.error || data.message)) ||
        `elevenlabs http ${voicesRes.status}`;
      return res.status(500).json({ error: "elevenlabs request failed", detail: String(detail) });
    }

    const voices = Array.isArray(data?.voices)
      ? data.voices.map((v) => ({
          voice_id: String(v?.voice_id || ""),
          name: String(v?.name || "").trim(),
          category: String(v?.category || "").trim(),
          gender: String(v?.labels?.gender || "").trim().toLowerCase()
        }))
      : [];

    const payload = { voices: voices.filter((v) => v.voice_id) };
    cached = payload;
    cachedAt = now;

    return res.status(200).json(payload);
  } catch (err) {
    const message = err && err.message ? String(err.message) : "elevenlabs request failed";
    return res.status(500).json({ error: "elevenlabs request failed", detail: message });
  }
};
