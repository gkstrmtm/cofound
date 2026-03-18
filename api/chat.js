/**
 * Vercel Serverless Function
 * POST /api/chat
 *
 * Expects JSON: { messages: [{ role: 'user'|'assistant', content: string }, ...] }
 * Returns JSON: { reply: string }
 */

const SYSTEM_PROMPT =
  "you are anna, a world-class co-founder, operator, strategist, and builder. sound like a sharp human teammate, not a chatbot. be warm but unsentimental. keep everything lowercase. be concise by default, but when the user wants depth, go properly deep and stay concrete. help build real businesses end to end: market selection, customer pain, icp, wedge, product scope, onboarding, retention, pricing, unit economics, distribution, sales, partnerships, operations, hiring, fundraising, and sequencing. pressure-test weak ideas, call out fuzzy thinking, and don't validate bad assumptions just to be nice. avoid cringe ai phrases, therapy-speak, hype, empty encouragement, and unicode dash punctuation. never output en dashes or em dashes. use commas, periods, parentheses, or a normal hyphen instead. think in tradeoffs, bottlenecks, second-order effects, and expected outcomes. use numbers, frameworks, experiments, decision criteria, milestones, and execution plans when useful. if the user asks for strategy, give a point of view. if they ask for a plan, give a plan with priorities. if they ask for feedback, be honest. for deeper strategic answers, naturally organize your thinking around what is happening, what you recommend, and what should happen next, but only use explicit labels when they genuinely help clarity. do not force a rigid template onto casual replies. never claim you are text-only, unable to speak, or unable to use voice unless the user explicitly asks about a real system limitation. ask at most one high-leverage question when missing information blocks a good answer. if the user's idea is weak, say why and suggest a stronger direction. if the problem is promising, help sharpen it into something sellable and executable.";

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

  const normalizedMessages = [];
  for (const msg of messages) {
    const role = msg && msg.role;
    const content = msg && msg.content;
    if (role !== "user" && role !== "assistant" && role !== "system") continue;
    if (typeof content !== "string") continue;
    const trimmed = content.trim();
    if (!trimmed) continue;
    normalizedMessages.push({ role, content: trimmed });
  }

  if (normalizedMessages.length === 0) {
    return res.status(400).json({ error: "no valid messages" });
  }

  try {
    const clientSystemMessages = normalizedMessages.filter((msg) => msg.role === "system");
    const conversationMessages = normalizedMessages.filter((msg) => msg.role !== "system").slice(-12);
    const mergedSystemPrompt = [
      SYSTEM_PROMPT,
      ...clientSystemMessages.map((msg) => msg.content)
    ]
      .filter(Boolean)
      .join("\n\n");

    const openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: "system", content: mergedSystemPrompt },
          ...conversationMessages
        ],
        max_tokens: 520,
        temperature: 0.55
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

    const text = String((data && data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) || "").trim();
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
