import { revalidatePath } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";

/* Sanity webhook target for instant publishing.
   Configure in Sanity: API → Webhooks → add
     URL:    https://heyfinni.com/api/revalidate?secret=YOUR_SECRET
     Trigger on: create / update / delete for _type == "post"
     Projection (so we can revalidate the exact post):  { "slug": slug.current }
   Set SANITY_REVALIDATE_SECRET to the same value in your host env. */
export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");
  if (!process.env.SANITY_REVALIDATE_SECRET || secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid or missing secret." }, { status: 401 });
  }

  let slug: string | undefined;
  try {
    const body = await req.json();
    slug = typeof body?.slug === "string" ? body.slug : body?.slug?.current;
  } catch {
    // no/invalid body — fall back to revalidating the index only
  }

  revalidatePath("/blog");
  revalidatePath("/sitemap.xml");
  if (slug) revalidatePath(`/blog/${slug}`);

  return NextResponse.json({ revalidated: true, slug: slug ?? null });
}
