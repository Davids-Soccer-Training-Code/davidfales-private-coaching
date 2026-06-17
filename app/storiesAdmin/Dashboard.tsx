"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Story } from "@/app/types/story";

export default function StoriesAdminDashboard() {
  const [stories, setStories] = useState<Story[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "published" | "drafts">("all");

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    try {
      const res = await fetch("/api/stories?published=false");
      const data = await res.json();
      setStories(data.stories || []);
    } catch (error) {
      console.error("Error fetching stories:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) return;

    try {
      const res = await fetch(`/api/stories/${id}`, { method: "DELETE" });
      if (res.ok) {
        fetchStories();
      } else {
        alert("Failed to delete story");
      }
    } catch (error) {
      console.error("Error deleting story:", error);
      alert("Failed to delete story");
    }
  };

  const handleUnpublish = async (id: string, title: string) => {
    if (!confirm(`Unpublish "${title}"? It will be hidden from the site.`))
      return;

    try {
      const res = await fetch(`/api/stories/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ published: false }),
      });
      if (res.ok) {
        fetchStories();
      } else {
        alert("Failed to unpublish story");
      }
    } catch (error) {
      console.error("Error unpublishing story:", error);
      alert("Failed to unpublish story");
    }
  };

  const filteredStories = stories.filter((story) => {
    if (filter === "published") return story.published;
    if (filter === "drafts") return !story.published;
    return true;
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-gray-600">Loading stories...</div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Player Stories</h1>
        <Link
          href="/storiesAdmin/new"
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
        >
          + New Story
        </Link>
      </div>

      {/* Filter tabs */}
      <div className="flex gap-4 mb-6 border-b border-gray-300">
        <button
          onClick={() => setFilter("all")}
          className={`pb-3 px-4 font-medium transition-colors ${
            filter === "all"
              ? "border-b-2 border-emerald-600 text-emerald-600"
              : "text-gray-600 hover:text-emerald-600"
          }`}
        >
          All ({stories.length})
        </button>
        <button
          onClick={() => setFilter("published")}
          className={`pb-3 px-4 font-medium transition-colors ${
            filter === "published"
              ? "border-b-2 border-emerald-600 text-emerald-600"
              : "text-gray-600 hover:text-emerald-600"
          }`}
        >
          Published ({stories.filter((s) => s.published).length})
        </button>
        <button
          onClick={() => setFilter("drafts")}
          className={`pb-3 px-4 font-medium transition-colors ${
            filter === "drafts"
              ? "border-b-2 border-emerald-600 text-emerald-600"
              : "text-gray-600 hover:text-emerald-600"
          }`}
        >
          Drafts ({stories.filter((s) => !s.published).length})
        </button>
      </div>

      {filteredStories.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-lg border-2 border-emerald-200 p-12 text-center">
          <p className="text-gray-600 mb-4">No stories found</p>
          <Link
            href="/storiesAdmin/new"
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
          >
            Create your first story
          </Link>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-lg border-2 border-emerald-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-emerald-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">
                  Featured
                </th>
                <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">
                  Published
                </th>
                <th className="px-6 py-3 text-right text-sm font-bold text-gray-900">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredStories.map((story) => (
                <tr
                  key={story.id}
                  className="border-t border-gray-200 hover:bg-emerald-50"
                >
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">
                      {story.title}
                    </div>
                    <div className="text-sm text-gray-600">/{story.slug}</div>
                  </td>
                  <td className="px-6 py-4">
                    {story.published ? (
                      <span className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                        Published
                      </span>
                    ) : (
                      <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                        Draft
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {story.featured ? "⭐ Yes" : "—"}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {story.published_at
                      ? new Date(story.published_at).toLocaleDateString()
                      : "-"}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2">
                      {story.published && (
                        <Link
                          href={`/stories/${story.slug}`}
                          target="_blank"
                          className="text-emerald-600 hover:text-emerald-700 text-sm font-medium"
                        >
                          View
                        </Link>
                      )}
                      {story.published && (
                        <button
                          onClick={() => handleUnpublish(story.id, story.title)}
                          className="text-orange-600 hover:text-orange-700 text-sm font-medium"
                        >
                          Unpublish
                        </button>
                      )}
                      <Link
                        href={`/storiesAdmin/edit/${story.id}`}
                        className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => handleDelete(story.id, story.title)}
                        className="text-red-600 hover:text-red-700 text-sm font-medium"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
