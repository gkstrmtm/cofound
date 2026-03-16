/**
 * Vercel Serverless Function
 * POST /api/auth-signup
 *
 * Uses a Supabase admin key when available to auto-confirm new users.
 * Falls back to normal signup with an explicit redirect URL.
 */

const { getSupabaseUrl, resolveSupabaseAdminKey, resolveSupabasePublicKey } = require("./_supabase");

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "method not allowed" });
  }

  let payload = {};
  try {
    payload = typeof req.body === "object" && req.body ? req.body : JSON.parse(req.body || "{}");
  } catch {
    return res.status(400).json({ ok: false, error: "invalid json" });
  }

  const email = String(payload.email || "").trim().toLowerCase();
  const password = String(payload.password || "");
  const name = String(payload.name || "").trim();
  const redirectTo = String(payload.redirectTo || "").trim();

  if (!email) {
    return res.status(400).json({ ok: false, error: "email required" });
  }
  if (!password || password.length < 8) {
    return res.status(400).json({ ok: false, error: "password must be at least 8 characters" });
  }

  const supabaseUrl = getSupabaseUrl();
  if (!supabaseUrl) {
    return res.status(500).json({ ok: false, error: "missing SUPABASE_URL" });
  }

  const { key: adminKey, hasAdminKey } = resolveSupabaseAdminKey();
  if (hasAdminKey) {
    try {
      const response = await fetch(`${supabaseUrl}/auth/v1/admin/users`, {
        method: "POST",
        headers: {
          apikey: adminKey,
          Authorization: `Bearer ${adminKey}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password,
          email_confirm: true,
          user_metadata: {
            name
          }
        })
      });

      const data = await response.json().catch(() => null);
      if (!response.ok) {
        const detail =
          data?.msg || data?.message || data?.error_description || data?.error || `supabase http ${response.status}`;
        return res.status(400).json({ ok: false, error: String(detail) });
      }

      return res.status(200).json({
        ok: true,
        autoConfirmed: true,
        requiresEmailConfirmation: false
      });
    } catch (error) {
      return res.status(500).json({
        ok: false,
        error: error?.message || "couldn't create account"
      });
    }
  }

  const { key: publicKey, looksSecret } = resolveSupabasePublicKey();
  if (!publicKey) {
    return res.status(500).json({
      ok: false,
      error: looksSecret
        ? "supabase public key is missing because a secret key was put in the public slot"
        : "missing supabase public key"
    });
  }

  try {
    const response = await fetch(`${supabaseUrl}/auth/v1/signup`, {
      method: "POST",
      headers: {
        apikey: publicKey,
        Authorization: `Bearer ${publicKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password,
        data: {
          name
        },
        email_redirect_to: redirectTo || undefined
      })
    });

    const data = await response.json().catch(() => null);
    if (!response.ok) {
      const detail =
        data?.msg || data?.message || data?.error_description || data?.error || `supabase http ${response.status}`;
      return res.status(400).json({ ok: false, error: String(detail) });
    }

    return res.status(200).json({
      ok: true,
      autoConfirmed: false,
      requiresEmailConfirmation: !data?.session,
      redirectTo: redirectTo || null
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error: error?.message || "couldn't create account"
    });
  }
};
