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
      of: [{ type: "block" }, { type: "image", options: { hotspot: true } }],
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
