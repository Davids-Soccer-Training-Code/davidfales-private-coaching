-- Stories: success stories from private players (like blog posts, with photos + rich text).
CREATE TABLE IF NOT EXISTS stories (
  id UUID PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  player_name TEXT,
  content JSONB,
  content_html TEXT NOT NULL,
  featured_image_url TEXT,
  author_name TEXT NOT NULL DEFAULT 'David Fales',
  published BOOLEAN NOT NULL DEFAULT false,
  featured BOOLEAN NOT NULL DEFAULT false,
  display_order INTEGER NOT NULL DEFAULT 0,
  published_at TIMESTAMPTZ,
  view_count INTEGER NOT NULL DEFAULT 0,
  meta_title TEXT,
  meta_description TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS stories_published_idx
  ON stories (published, featured DESC, display_order ASC, published_at DESC);
