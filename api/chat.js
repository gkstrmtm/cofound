/**
 * Vercel Serverless Function
 * POST /api/chat
 *
 * Expects JSON: { messages: [{ role: 'user'|'assistant', content: string }, ...] }
 * Returns JSON: { reply: string }
 */

const SYSTEM_PROMPT =
  "you are anna, an ai co-founder. keep responses concise, actionable, and lowercase. ask one focused question when needed.";

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "method not allowed" });
  }

  const apiKey = (process.env.OPENAI_API_KEY || "").trim();
  const model = (process.env.OPENAI_MODEL || "gpt-4.1-mini").trim();

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

  const messages = payload.messages;
  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: "messages must be a non-empty array" });
  }

  const filtered = [];
  for (const msg of messages.slice(-12)) {
    const role = msg && msg.role;
    const content = msg && msg.content;
    if (role !== "user" && role !== "assistant") continue;
    if (typeof content !== "string") continue;
    const trimmed = content.trim();
    if (!trimmed) continue;
    filtered.push({ role, content: trimmed });
  }

  if (filtered.length === 0) {
    return res.status(400).json({ error: "no valid messages" });
  }

  try {
    const openaiRes = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model,
        input: [
          {
            role: "system",
            content: [{ type: "input_text", text: SYSTEM_PROMPT }]
          },
          ...filtered.map((m) => ({
            role: m.role,
            content: [{ type: "input_text", text: m.content }]
          }))
        ],
        max_output_tokens: 180,
        temperature: 0.6
      })
    });

    const data = await openaiRes.json().catch(() => null);
    if (!openaiRes.ok) {
      const detail =
        (data && (data.error?.message || data.error?.type || data.error || data.message)) ||
        `openai http ${openaiRes.status}`;
      return res.status(500).json({
        error: "openai request failed",
        detail,
        status: openaiRes.status
      });
    }

    const text = String((data && data.output_text) || "").trim();
    if (!text) {
      return res.status(500).json({
        error: "openai request failed",
        detail: "empty reply"
      });
    }
    return res.status(200).json({ reply: text });
  } catch (err) {
    const message = err && err.message ? String(err.message) : "openai request failed";
    return res.status(500).json({ error: "openai request failed", detail: message });
  }
};
