create table if not exists public.anna_user_state (
  email text primary key,
  name text not null default '',
  state jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.anna_user_state enable row level security;

create policy "anna users can read own state"
on public.anna_user_state
for select
using (auth.jwt() ->> 'email' = email);

create policy "anna users can insert own state"
on public.anna_user_state
for insert
with check (auth.jwt() ->> 'email' = email);

create policy "anna users can update own state"
on public.anna_user_state
for update
using (auth.jwt() ->> 'email' = email)
with check (auth.jwt() ->> 'email' = email);
