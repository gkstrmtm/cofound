function resolveSupabasePublicKey() {
  const candidates = [
    process.env.SUPABASE_ANON_KEY,
    process.env.SUPABASE_PUBLISHABLE_KEY,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
  ]
    .map((value) => String(value || "").trim())
    .filter(Boolean);

  const rawKey = candidates[0] || "";
  const looksSecret = /^sb_secret_/i.test(rawKey) || /service[_-]?role/i.test(rawKey);

  return {
    key: looksSecret ? "" : rawKey,
    rawKey,
    looksSecret
  };
}

function resolveSupabaseAdminKey() {
  const candidates = [
    process.env.SUPABASE_SERVICE_ROLE_KEY,
    process.env.SUPABASE_SECRET_KEY,
    process.env.SUPABASE_SERVICE_KEY
  ]
    .map((value) => String(value || "").trim())
    .filter(Boolean);

  const fromPublicSlot = [process.env.SUPABASE_ANON_KEY, process.env.SUPABASE_PUBLISHABLE_KEY]
    .map((value) => String(value || "").trim())
    .find((value) => /^sb_secret_/i.test(value) || /service[_-]?role/i.test(value));

  const key = candidates[0] || fromPublicSlot || "";
  return {
    key,
    hasAdminKey: Boolean(key)
  };
}

function getSupabaseUrl() {
  return String(process.env.SUPABASE_URL || "").trim();
}

module.exports = {
  resolveSupabasePublicKey,
  resolveSupabaseAdminKey,
  getSupabaseUrl
};
