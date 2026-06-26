"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { StoryListItem } from "@/app/types/story";
import StoryCard from "@/app/components/stories/StoryCard";

export default function StoriesPreview() {
  const [stories, setStories] = useState<StoryListItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/stories?limit=4", { cache: "no-store" });
        if (!res.ok) return;
        const data = (await res.json()) as { stories?: StoryListItem[] };
        setStories(data.stories || []);
      } catch (error) {
        console.error("Failed to load stories preview", error);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <section className="py-20 px-6 bg-linear-to-b from-emerald-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-emerald-700 font-semibold mb-3">Player Stories</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Real progress, real players
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how players have improved through 1-on-1 training with Coach
            David.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-10 text-gray-600">
            Loading stories...
          </div>
        ) : stories.length === 0 ? (
          <div className="text-center py-10 text-gray-600">
            Stories coming soon — check back shortly.
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {stories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        )}

        <div className="text-center">
          <Link
            href="/stories"
            className="inline-flex items-center justify-center bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-700 transition-colors shadow-lg"
          >
            Read all stories
          </Link>
        </div>
      </div>
    </section>
  );
}
