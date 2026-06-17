"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import BlogCard from "@/app/components/blog/BlogCard";
import { BlogPostListItem } from "@/app/types/blog";

export default function BlogPreview() {
  const [blogPosts, setBlogPosts] = useState<BlogPostListItem[]>([]);
  const [blogLoading, setBlogLoading] = useState(true);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch("/api/blog/posts?limit=3&offset=0");
        const data = await response.json();
        if (data.posts) {
          setBlogPosts(data.posts);
        }
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setBlogLoading(false);
      }
    };
    fetchBlogPosts();
  }, []);

  return (
    <section
      id="blog"
      className="py-20 px-6 bg-linear-to-b from-emerald-50 to-white"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest from the Blog
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Tips, techniques, and insights to help improve your game
          </p>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover training strategies, skill development tips, and coaching
            insights that can help take your game to the next level.
          </p>
        </div>

        {blogLoading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading blog posts...</p>
          </div>
        ) : blogPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No blog posts yet. Check back soon!</p>
          </div>
        ) : (
          <>
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              {blogPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
            <div className="text-center">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-700 transition-colors shadow-lg"
              >
                View All Blogs
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
