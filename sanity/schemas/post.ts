import { defineType, defineField } from "sanity";

/* Categories must match the color/icon map in the blog UI
   (src/components/finni/BlogPage.tsx → CATS). */
export const POST_CATEGORIES = [
  "Money basics",
  "Guides",
  "Privacy",
  "Product",
  "Psychology",
] as const;

export default defineType({
  name: "post",
  title: "Blog post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: POST_CATEGORIES.map((c) => ({ title: c, value: c })),
        layout: "radio",
      },
      initialValue: "Money basics",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      description: "One or two sentences shown on the card and as the meta description.",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required().max(280),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "author" }],
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "readTime",
      title: "Read time",
      description: 'e.g. "5 min"',
      type: "string",
    }),
    defineField({
      name: "coverImage",
      title: "Cover image",
      description: "Optional. Leave empty to use the generated category thumbnail.",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt text", type: "string" }],
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        { type: "block" },
        { type: "image", options: { hotspot: true } },
        {
          // Accepts inline images from imported/generated content.
          type: "object",
          name: "inlineImage",
          title: "Inline image",
          fields: [
            { name: "image", title: "Image", type: "image", options: { hotspot: true } },
            { name: "alt", title: "Alt text", type: "string" },
            { name: "caption", title: "Caption", type: "string" },
          ],
          preview: { select: { media: "image", title: "alt", subtitle: "caption" } },
        },
      ],
    }),
    // ── Legacy fields (from imported content) — kept so older posts validate.
    defineField({
      name: "categories",
      title: "Categories (legacy)",
      type: "array",
      of: [{ type: "string" }],
      description: "Legacy import field. New posts use the single Category above.",
    }),
    defineField({
      name: "mainImage",
      title: "Main image (legacy)",
      type: "image",
      options: { hotspot: true },
      description: "Legacy import field. New posts use Cover image above.",
    }),
    defineField({
      name: "seo",
      title: "SEO (legacy)",
      type: "object",
      fields: [
        { name: "metaTitle", title: "Meta title", type: "string" },
        { name: "metaDescription", title: "Meta description", type: "text" },
      ],
    }),
  ],
  orderings: [
    {
      title: "Published, newest first",
      name: "publishedDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "author.name", media: "coverImage" },
  },
});
