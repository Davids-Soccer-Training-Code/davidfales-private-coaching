import { NextResponse } from 'next/server';
import { handleUpload, type HandleUploadBody } from '@vercel/blob/client';
import { cookies } from 'next/headers';
import { verifySessionToken } from '@/app/lib/auth/adminAuth';

export const dynamic = 'force-dynamic';

// Allowed image content types. Empty/unknown types are rejected.
const ALLOWED_IMAGE_TYPES = [
  'image/jpeg',
  'image/pjpeg',
  'image/png',
  'image/webp',
  'image/gif',
  'image/avif',
  'image/heic',
  'image/heif',
];

// Client-side upload: the browser uploads the file directly to Vercel Blob,
// so we never route the file bytes through this serverless function and avoid
// Vercel's 4.5MB request-body limit. This route only mints a short-lived,
// auth-gated upload token.
export async function POST(request: Request): Promise<NextResponse> {
  const body = (await request.json()) as HandleUploadBody;

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async () => {
        // Verify admin authentication before issuing an upload token
        const cookieStore = await cookies();
        const sessionToken = cookieStore.get('blogAdminSession')?.value;

        if (!verifySessionToken(sessionToken)) {
          throw new Error('Unauthorized');
        }

        return {
          allowedContentTypes: ALLOWED_IMAGE_TYPES,
          addRandomSuffix: true,
          maximumSizeInBytes: 50 * 1024 * 1024, // 50MB
        };
      },
      // Runs only when Blob can reach this endpoint (i.e. on a deployed URL,
      // not localhost). Nothing to persist here — the client gets the URL back.
      onUploadCompleted: async () => {},
    });

    return NextResponse.json(jsonResponse);
  } catch (error) {
    console.error('Upload error:', error);
    const message = error instanceof Error ? error.message : 'Upload failed';
    const status = message === 'Unauthorized' ? 401 : 400;
    return NextResponse.json({ error: message }, { status });
  }
}
