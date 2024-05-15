import { defineConfig } from "sanity";
import { deskTool, StructureBuilder } from "sanity/desk";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

import schemas from "./sanity/schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "development";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "";

const config = defineConfig({
  projectId,
  dataset,
  title: "Personal Site Studio",
  apiVersion,
  basePath: "/admin",
  plugins: [
    deskTool({
      structure: (S, context) => {
        return S.list()
          .title("Content")
          .items([
            orderableDocumentListDeskItem({
              title: "Projects",
              type: "project",
              S,
              context,
            }),
            orderableDocumentListDeskItem({
              title: "Awards",
              type: "award",
              S,
              context,
            }),
            orderableDocumentListDeskItem({
              title: "Talks",
              type: "talk",
              S,
              context,
            }),
          ]);
      },
    }),
  ],
  schema: {
    types: schemas,
  },
});

export default config;
