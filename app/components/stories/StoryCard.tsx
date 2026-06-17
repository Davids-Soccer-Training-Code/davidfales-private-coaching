import Link from "next/link";
import { StoryListItem } from "@/app/types/story";

interface StoryCardProps {
  story: StoryListItem;
}

export default function StoryCard({ story }: StoryCardProps) {
  return (
    <Link href={`/stories/${story.slug}`}>
      <div className="relative h-full bg-white rounded-2xl shadow-lg border-2 border-emerald-200 overflow-hidden hover:shadow-xl hover:border-emerald-300 transition-all duration-200">
        {story.featured && (
          <div className="absolute left-4 top-4 z-10 rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white shadow">
            ⭐ Featured
          </div>
        )}
        {story.featured_image_url && (
          <img
            src={story.featured_image_url}
            alt={story.title}
            className="w-full h-48 object-cover"
          />
        )}

        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2 hover:text-emerald-600 transition-colors">
            {story.title}
          </h2>

          {story.player_name && (
            <p className="text-emerald-700 font-semibold mb-2">
              {story.player_name}
            </p>
          )}

          {story.excerpt && (
            <p className="text-gray-600 mb-4 line-clamp-3">{story.excerpt}</p>
          )}

          <span className="inline-block text-emerald-700 font-semibold text-sm">
            Read the story →
          </span>
        </div>
      </div>
    </Link>
  );
}
