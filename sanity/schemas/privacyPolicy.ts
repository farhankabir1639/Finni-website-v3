import { defineType, defineField } from "sanity";

export default defineType({
  name: "privacyPolicy",
  title: "Privacy Policy",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "lastUpdated",
      title: "Last Updated",
      type: "date",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});
