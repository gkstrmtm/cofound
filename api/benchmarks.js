/**
 * Vercel Serverless Function
 * GET /api/benchmarks
 */

module.exports = async (req, res) => {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ ok: false, error: "method not allowed" });
  }

  return res.status(200).json({
    ok: true,
    days_to_launch: null,
    projects_left: 0,
    tasks: []
  });
};
