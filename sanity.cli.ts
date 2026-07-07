import { defineCliConfig } from "sanity/cli";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "llw9afhn";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
  // Hostname for a Sanity-hosted copy (`npx sanity deploy`) → heyfinni.sanity.studio.
  // Must be globally unique; if taken, change it or remove this line to be prompted.
  studioHost: "heyfinni",
});
