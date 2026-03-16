/**
 * Vercel Serverless Function
 * GET /api/public-config
 *
 * Exposes only public config that is safe for the browser.
 */

function resolveSupabasePublicKey() {
  const candidates = [
    process.env.SUPABASE_ANON_KEY,
    process.env.SUPABASE_PUBLISHABLE_KEY,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
  ]
    .map((value) => String(value || "").trim())
    .filter(Boolean);

  const key = candidates[0] || "";
  const looksSecret = /^sb_secret_/i.test(key) || /service[_-]?role/i.test(key);

  return {
    key: looksSecret ? "" : key,
    looksSecret
  };
}

module.exports = async (req, res) => {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ ok: false, error: "method not allowed" });
  }

  const supabaseUrl = (process.env.SUPABASE_URL || "").trim();
  const { key: supabaseAnonKey, looksSecret } = resolveSupabasePublicKey();

  return res.status(200).json({
    ok: true,
    supabaseUrl,
    supabaseAnonKey,
    hasSupabase: Boolean(supabaseUrl && supabaseAnonKey),
    supabaseKeyError: looksSecret ? "supabase secret key cannot be used in the browser; use the anon public key" : null
  });
};
