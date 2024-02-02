import {
  orderRankOrdering,
  orderRankField,
} from "@sanity/orderable-document-list";

const project = {
  name: "project",
  title: "Projects",
  type: "document",
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: "project" }),
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "client",
      title: "Client",
      type: "string",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alt",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "year",
      title: "Year",
      type: "string",
    },
    {
      name: "url",
      title: "URL",
      type: "url",
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "awards",
      title: "Awards",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "sectors",
      title: "Sectors",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "highlight",
      title: "Highlight",
      type: "boolean",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
  ],
};

export default project;
