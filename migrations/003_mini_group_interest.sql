-- Mini groups moved from one-off, individually-priced sessions to a fixed
-- weekly schedule at Gilbert Regional Park. Families no longer check out per
-- session; they submit interest and get placed into a group by hand.

CREATE TABLE IF NOT EXISTS mini_group_interest (
  id SERIAL PRIMARY KEY,
  parent_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  player_name TEXT NOT NULL,
  preferred_times JSONB NOT NULL DEFAULT '[]'::jsonb,
  contacted BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_mini_group_interest_created_at
  ON mini_group_interest (created_at DESC);
