import Link from "next/link";
import { client } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

const PRIVACY_QUERY = `*[_type == "privacyPolicy"][0]{
  title,
  lastUpdated,
  body
}`;

type PrivacyPolicy = {
  title?: string;
  lastUpdated?: string;
  body?: PortableTextBlock[];
};

async function getPrivacyPolicy(): Promise<PrivacyPolicy | null> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) return null;
  try {
    return await client.fetch<PrivacyPolicy>(PRIVACY_QUERY);
  } catch {
    return null;
  }
}

const portableTextComponents = {
  block: {
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="mt-8 mb-4 text-2xl font-bold text-white">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="mt-6 mb-3 text-xl font-semibold text-white">{children}</h3>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="mb-4 text-[#8892A4] leading-relaxed">{children}</p>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 border-[#00E676] pl-4 italic text-[#8892A4] my-4">
        {children}
      </blockquote>
    ),
  },
};

export default async function PrivacyPolicyPage() {
  const policy = await getPrivacyPolicy();

  return (
    <main className="min-h-screen">
      <div className="max-w-3xl mx-auto py-20 px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#8892A4] hover:text-white transition-colors mb-8"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Finni AI
        </Link>

        {policy ? (
          <article>
            <h1 className="text-3xl font-bold text-white">
              {policy.title || "Privacy Policy"}
            </h1>
            {policy.lastUpdated && (
              <p className="mt-2 text-sm text-[#8892A4]">
                Last updated:{" "}
                {new Date(policy.lastUpdated).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            )}
            {policy.body && policy.body.length > 0 ? (
              <div className="mt-8">
                <PortableText
                  value={policy.body}
                  components={portableTextComponents}
                />
              </div>
            ) : (
              <p className="mt-8 text-[#8892A4] leading-relaxed">
                No privacy policy content has been added yet. Add content in
                Sanity Studio to display it here.
              </p>
            )}
          </article>
        ) : (
          <div>
            <h1 className="text-3xl font-bold text-white">Privacy Policy</h1>
            <p className="mt-4 text-[#8892A4] leading-relaxed">
              Configure Sanity CMS to manage your privacy policy content. Add
              NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET to
              your .env.local file, then create a Privacy Policy document in
              Sanity Studio.
            </p>
            <Link
              href="/"
              className="mt-6 inline-block text-[#00E676] font-medium hover:underline"
            >
              Return to Home
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
