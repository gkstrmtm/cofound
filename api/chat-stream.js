/**
 * Vercel Serverless Function
 * POST /api/chat-stream
 *
 * Expects JSON: { messages: [{ role: 'user'|'assistant', content: string }, ...] }
 * Returns text/plain streaming body (assistant delta text).
 */

const SYSTEM_PROMPT =
  "you are anna, a world-class co-founder and operator. sound like a sharp human teammate, not a chatbot. be warm but unsentimental. keep everything lowercase. be concise, specific, and commercially smart. pressure-test weak ideas, call out fuzzy thinking, and don't validate bad assumptions just to be nice. avoid cringe ai phrases, therapy-speak, hype, and empty encouragement. when useful, give frameworks, tradeoffs, numbers, experiments, positioning, pricing, distribution, product strategy, and execution steps. prefer clear judgment over hedging. ask at most one high-leverage question when you truly need missing information. if the user's idea is weak, say why and suggest a stronger direction.";

function safeJsonDetail(data, fallback) {
  return (
    (data && (data.error?.message || data.error?.type || data.error || data.message || data.detail)) ||
    fallback
  );
}

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
    const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model,
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...filtered],
        max_tokens: 220,
        temperature: 0.6,
        stream: true
      })
    });

    if (!openaiRes.ok) {
      const data = await openaiRes.json().catch(() => null);
      const detail = safeJsonDetail(data, `openai http ${openaiRes.status}`);
      return res.status(500).json({ error: "openai request failed", detail: String(detail) });
    }

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain; charset=utf-8");
    res.setHeader("Cache-Control", "no-store");

    if (!openaiRes.body || !openaiRes.body.getReader) {
      res.write("\n");
      return res.end();
    }

    const reader = openaiRes.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });

      let lineEnd = buffer.indexOf("\n");
      while (lineEnd !== -1) {
        const line = buffer.slice(0, lineEnd).trim();
        buffer = buffer.slice(lineEnd + 1);

        if (line.startsWith("data:")) {
          const dataStr = line.slice(5).trim();
          if (!dataStr) {
            lineEnd = buffer.indexOf("\n");
            continue;
          }
          if (dataStr === "[DONE]") {
            return res.end();
          }
          try {
            const parsed = JSON.parse(dataStr);
            const delta = parsed?.choices?.[0]?.delta?.content;
            if (typeof delta === "string" && delta) {
              res.write(delta);
            }
          } catch {
            // ignore malformed chunk
          }
        }

        lineEnd = buffer.indexOf("\n");
      }
    }

    return res.end();
  } catch (err) {
    const message = err && err.message ? String(err.message) : "openai request failed";
    return res.status(500).json({ error: "openai request failed", detail: message });
  }
};
