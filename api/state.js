const { getSupabaseUrl, resolveSupabaseAdminKey, resolveSupabasePublicKey } = require("./_supabase");

function getStateAuthHeaders(accessToken) {
  const supabaseUrl = getSupabaseUrl();
  const admin = resolveSupabaseAdminKey();
  const publicConfig = resolveSupabasePublicKey();
  const apiKey = admin.key || publicConfig.key;
  const authToken = admin.key || String(accessToken || "").trim();

  if (!supabaseUrl || !apiKey || !authToken) {
    return null;
  }

  return {
    supabaseUrl,
    headers: {
      apikey: apiKey,
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "application/json"
    }
  };
}

async function safeJson(res) {
  return res.json().catch(() => null);
}

module.exports = async (req, res) => {
  const accessToken = String(req.headers["x-supabase-access-token"] || "").trim();
  const auth = getStateAuthHeaders(accessToken);
  if (!auth) {
    return res.status(401).json({ ok: false, error: "missing supabase auth context" });
  }

  if (req.method === "GET") {
    const email = String(req.query?.email || "").trim().toLowerCase();
    if (!email) {
      return res.status(400).json({ ok: false, error: "email required" });
    }

    const query = `${auth.supabaseUrl}/rest/v1/anna_user_state?select=state,name,updated_at&email=eq.${encodeURIComponent(email)}&limit=1`;
    const stateRes = await fetch(query, {
      method: "GET",
      headers: {
        ...auth.headers,
        Accept: "application/json"
      }
    });

    const data = await safeJson(stateRes);
    if (!stateRes.ok) {
      const detail =
        data?.message || data?.error || data?.hint || data?.details || `supabase http ${stateRes.status}`;
      return res.status(500).json({ ok: false, error: "state load failed", detail: String(detail) });
    }

    const row = Array.isArray(data) ? data[0] : null;
    return res.status(200).json({ ok: true, state: row?.state || null, name: row?.name || "" });
  }

  if (req.method === "POST") {
    let payload = {};
    try {
      payload = typeof req.body === "object" && req.body ? req.body : JSON.parse(req.body || "{}");
    } catch {
      return res.status(400).json({ ok: false, error: "invalid json" });
    }

    const email = String(payload.email || "").trim().toLowerCase();
    if (!email) {
      return res.status(400).json({ ok: false, error: "email required" });
    }

    const row = {
      email,
      name: String(payload.name || "").trim(),
      state: payload.state && typeof payload.state === "object" ? payload.state : {},
      updated_at: String(payload.updated_at || new Date().toISOString())
    };

    const saveRes = await fetch(`${auth.supabaseUrl}/rest/v1/anna_user_state?on_conflict=email`, {
      method: "POST",
      headers: {
        ...auth.headers,
        Prefer: "resolution=merge-duplicates,return=representation"
      },
      body: JSON.stringify([row])
    });

    const data = await safeJson(saveRes);
    if (!saveRes.ok) {
      const detail =
        data?.message || data?.error || data?.hint || data?.details || `supabase http ${saveRes.status}`;
      return res.status(500).json({ ok: false, error: "state save failed", detail: String(detail) });
    }

    return res.status(200).json({ ok: true });
  }

  res.setHeader("Allow", "GET, POST");
  return res.status(405).json({ ok: false, error: "method not allowed" });
};
