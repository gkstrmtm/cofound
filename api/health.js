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

  return res.status(200).json({
    ok: true,
    has_openai_key: hasOpenAIKey,
    openai_model: model
  });
};
