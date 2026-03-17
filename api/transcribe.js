/**
 * Vercel Serverless Function
 * POST /api/transcribe
 *
 * Expects JSON: { audioBase64: string, mimeType?: string }
 * Returns JSON: { text: string }
 */

function normalizeMimeType(value) {
  const mimeType = String(value || "audio/webm").trim().toLowerCase();
  if (!mimeType) {
    return "audio/webm";
  }
  if (mimeType.includes("webm")) {
    return "audio/webm";
  }
  if (mimeType.includes("mp4")) {
    return "audio/mp4";
  }
  if (mimeType.includes("mpeg") || mimeType.includes("mp3")) {
    return "audio/mpeg";
  }
  return mimeType;
}

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "method not allowed" });
  }

  const apiKey = (process.env.OPENAI_API_KEY || "").trim();
  const model = (process.env.OPENAI_TRANSCRIBE_MODEL || "gpt-4o-mini-transcribe").trim();

  if (!apiKey) {
    return res.status(500).json({
      error: "missing OPENAI_API_KEY",
      hint: "set OPENAI_API_KEY in vercel project settings (environment variables)"
    });
  }

  let payload = {};
  try {
    payload = typeof req.body === "object" && req.body ? req.body : JSON.parse(req.body || "{}");
  } catch {
    return res.status(400).json({ error: "invalid json" });
  }

  const audioBase64 = String(payload.audioBase64 || "").trim();
  if (!audioBase64) {
    return res.status(400).json({ error: "audioBase64 is required" });
  }

  const mimeType = normalizeMimeType(payload.mimeType);

  try {
    const audioBuffer = Buffer.from(audioBase64, "base64");
    if (!audioBuffer.length) {
      return res.status(400).json({ error: "empty audio payload" });
    }

    const formData = new FormData();
    const extension = mimeType.includes("mp4") ? "m4a" : mimeType.includes("mpeg") ? "mp3" : "webm";
    formData.append("file", new Blob([audioBuffer], { type: mimeType }), `anna-recording.${extension}`);
    formData.append("model", model);

    const openaiRes = await fetch("https://api.openai.com/v1/audio/transcriptions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`
      },
      body: formData
    });

    const data = await openaiRes.json().catch(() => null);
    if (!openaiRes.ok) {
      const detail = String(data?.error?.message || data?.error || data?.message || `openai http ${openaiRes.status}`);
      return res.status(500).json({ error: "openai transcription failed", detail });
    }

    const text = String(data?.text || "").trim();
    if (!text) {
      return res.status(500).json({ error: "openai transcription failed", detail: "empty transcript" });
    }

    return res.status(200).json({ text });
  } catch (error) {
    const detail = String(error?.message || "openai transcription failed");
    return res.status(500).json({ error: "openai transcription failed", detail });
  }
};