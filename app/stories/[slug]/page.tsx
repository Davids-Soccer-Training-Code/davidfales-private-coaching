import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import MainHeader from "@/app/components/layout/MainHeader";
import MainFooter from "@/app/components/layout/MainFooter";
import StickyContactBar from "@/app/components/layout/StickyContactBar";
import BlogPostContent from "@/app/components/blog/BlogPostContent";
import { getStoryBySlug } from "@/app/lib/db/queries";
import { BOOKING_URL, buildSmsHref, defaultTextTemplate } from "@/app/lib/contact";

const SITE_URL = "https://www.davidssoccertraining.com";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const story = await getStoryBySlug(slug, { incrementView: false });

  if (!story) {
    return { title: "Story Not Found" };
  }

  const description =
    story.meta_description ||
    story.excerpt ||
    `Read ${story.title} — a player story from David's Soccer Training`;

  return {
    title: story.meta_title || story.title,
    description,
    alternates: { canonical: `/stories/${story.slug}` },
    openGraph: {
      title: story.meta_title || story.title,
      description,
      images: story.featured_image_url ? [story.featured_image_url] : [],
      type: "article",
      publishedTime: story.published_at?.toString(),
      authors: [story.author_name],
    },
    twitter: {
      card: "summary_large_image",
      title: story.meta_title || story.title,
      description,
      images: story.featured_image_url ? [story.featured_image_url] : [],
    },
  };
}

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const story = await getStoryBySlug(slug);

  if (!story) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: story.title,
    description: story.excerpt,
    image: story.featured_image_url,
    datePublished: story.published_at,
    dateModified: story.updated_at,
    author: { "@type": "Person", name: story.author_name },
    publisher: {
      "@type": "Organization",
      name: "David's Soccer Training",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.png` },
    },
  };

  return (
    <div className="min-h-screen bg-white pb-24 md:pb-0">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <MainHeader />

      <article className="container mx-auto max-w-4xl px-6 py-12">
        <div className="mb-6">
          <Link
            href="/stories"
            className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-medium"
          >
            ← Back to Stories
          </Link>
        </div>

        {story.featured_image_url && (
          <img
            src={story.featured_image_url}
            alt={story.title}
            className="w-full aspect-video object-cover rounded-2xl shadow-lg mb-8"
          />
        )}

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
          {story.title}
        </h1>

        {story.player_name && (
          <p className="text-xl text-emerald-700 font-semibold mb-4">
            {story.player_name}
          </p>
        )}

        <div className="flex items-center gap-4 text-gray-600 mb-8 pb-8 border-b border-gray-300">
          <span>By {story.author_name}</span>
          {story.published_at && (
            <>
              <span>•</span>
              <time>
                {new Date(story.published_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </>
          )}
        </div>

        <BlogPostContent htmlContent={story.content_html} />

        {/* CTA */}
        <div className="mt-12 pt-8 border-t border-gray-300 bg-linear-to-br from-emerald-50 to-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Want results like this for your player?
          </h2>
          <p className="text-gray-600 mb-6">
            Book a session or text Coach David to get started.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-colors shadow-lg"
            >
              Book a session
            </a>
            <a
              href={buildSmsHref(defaultTextTemplate)}
              className="inline-flex items-center justify-center bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-700 transition-colors shadow-lg"
            >
              Text Coach David
            </a>
          </div>
        </div>
      </article>

      <StickyContactBar />
      <MainFooter />
    </div>
  );
}
