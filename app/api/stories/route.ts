import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifySessionToken } from "@/app/lib/auth/adminAuth";
import {
  getPublishedStories,
  getAllStoriesForAdmin,
  createStory,
  checkStorySlugExists,
} from "@/app/lib/db/queries";

export const dynamic = "force-dynamic";

// GET all stories (public published, or admin all)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const publishedOnly = searchParams.get("published") !== "false";
    const limit = parseInt(searchParams.get("limit") || "50");
    const offset = parseInt(searchParams.get("offset") || "0");

    let stories;
    if (publishedOnly) {
      stories = await getPublishedStories(limit, offset);
    } else {
      // Admin view - check authentication
      const cookieStore = await cookies();
      const sessionToken = cookieStore.get("blogAdminSession")?.value;
      if (!verifySessionToken(sessionToken)) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
      stories = await getAllStoriesForAdmin(limit, offset);
    }

    return NextResponse.json({ stories });
  } catch (error) {
    console.error("Error fetching stories:", error);
    return NextResponse.json(
      { error: "Failed to fetch stories" },
      { status: 500 }
    );
  }
}

// POST create new story (admin only)
export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("blogAdminSession")?.value;
    if (!verifySessionToken(sessionToken)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();

    if (!body.title || !body.slug || !body.content_html) {
      return NextResponse.json(
        { error: "Missing required fields: title, slug, content_html" },
        { status: 400 }
      );
    }

    const slugExists = await checkStorySlugExists(body.slug);
    if (slugExists) {
      return NextResponse.json(
        { error: "Slug already exists" },
        { status: 400 }
      );
    }

    const story = await createStory(body);

    return NextResponse.json({ story }, { status: 201 });
  } catch (error) {
    console.error("Error creating story:", error);
    return NextResponse.json(
      { error: "Failed to create story" },
      { status: 500 }
    );
  }
}
