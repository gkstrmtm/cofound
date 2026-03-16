/**
 * Vercel Serverless Function
 * GET /api/benchmarks
 */

module.exports = async (req, res) => {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ ok: false, error: "method not allowed" });
  }

  // Simple, opinionated launch-readiness checklist.
  // This can evolve into a real backend model later.
  const tasks = [
    {
      id: "landing-page",
      title: "finalize landing page headline and offer",
      status: "todo"
    },
    {
      id: "analytics",
      title: "add analytics and conversion tracking",
      status: "todo"
    },
    {
      id: "payment",
      title: "set up pricing and payment flow",
      status: "todo"
    },
    {
      id: "support",
      title: "write onboarding and support docs",
      status: "todo"
    },
    {
      id: "distribution",
      title: "pick one distribution channel and ship 10 posts",
      status: "todo"
    },
    {
      id: "stress-test",
      title: "stress test volume limits",
      status: "todo"
    }
  ];

  const todoCount = tasks.filter((t) => t.status !== "done").length;

  return res.status(200).json({
    ok: true,
    days_to_launch: 34,
    projects_left: todoCount,
    tasks
  });
};
