/**
 * Vercel Serverless Function
 * GET /api/public-config
 *
 * Exposes only public config that is safe for the browser.
 */

const { getSupabaseUrl, resolveSupabaseAdminKey, resolveSupabasePublicKey } = require("./_supabase");

module.exports = async (req, res) => {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ ok: false, error: "method not allowed" });
  }

  const supabaseUrl = getSupabaseUrl();
  const { key: supabaseAnonKey, looksSecret } = resolveSupabasePublicKey();
  const { hasAdminKey } = resolveSupabaseAdminKey();

  return res.status(200).json({
    ok: true,
    supabaseUrl,
    supabaseAnonKey,
    hasSupabase: Boolean(supabaseUrl && supabaseAnonKey),
    hasSupabaseAdminKey: hasAdminKey,
    supabaseKeyError: looksSecret ? "supabase secret key cannot be used in the browser; use the anon public key" : null
  });
};
