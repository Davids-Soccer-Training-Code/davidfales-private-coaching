import type { Metadata } from "next";
import StoryCard from "@/app/components/stories/StoryCard";
import { getPublishedStories } from "@/app/lib/db/queries";
import MainHeader from "@/app/components/layout/MainHeader";
import MainFooter from "@/app/components/layout/MainFooter";
import StickyContactBar from "@/app/components/layout/StickyContactBar";

export const metadata: Metadata = {
  title: "Player Stories | David's Soccer Training",
  description:
    "Real stories and progress from players training 1-on-1 with Coach David in Gilbert & Mesa.",
  alternates: { canonical: "/stories" },
};

// Force dynamic rendering so new stories show immediately
export const dynamic = "force-dynamic";

export default async function StoriesPage() {
  const stories = await getPublishedStories(100, 0);

  return (
    <div className="min-h-screen bg-white pb-24 md:pb-0">
      <MainHeader />

      {/* Header */}
      <div className="bg-gradient-to-b from-emerald-50 to-white py-12">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Player Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Real progress from players training 1-on-1 with Coach David — the
            work, the wins, and what changed.
          </p>
        </div>
      </div>

      {/* Stories grid */}
      <div className="container mx-auto px-6 py-12">
        {stories.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">
              Stories are coming soon. Check back shortly!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        )}
      </div>

      <StickyContactBar />
      <MainFooter />
    </div>
  );
}
