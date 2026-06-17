export interface Story {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  player_name: string | null;
  content: any; // Tiptap JSON
  content_html: string;
  featured_image_url: string | null;
  author_name: string;
  published: boolean;
  featured: boolean;
  display_order: number;
  published_at: Date | null;
  created_at: Date;
  updated_at: Date;
  view_count: number;
  meta_title: string | null;
  meta_description: string | null;
}

// For list/preview responses
export interface StoryListItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  player_name: string | null;
  featured_image_url: string | null;
  published_at: Date | null;
  author_name: string;
  view_count: number;
  featured: boolean;
}
