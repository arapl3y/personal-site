import { loadEnvConfig } from "@next/env";
import { defineCliConfig } from "sanity/cli";

const dev = process.env.NODE_ENV !== "production";

loadEnvConfig(__dirname, dev, { info: () => null, error: console.error });

const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "";
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";

export default defineCliConfig({
  api: { projectId, dataset },
});
