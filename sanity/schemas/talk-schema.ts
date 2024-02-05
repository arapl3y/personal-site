import {
  orderRankOrdering,
  orderRankField,
} from "@sanity/orderable-document-list";

const talk = {
  name: "talk",
  title: "Talks",
  type: "document",
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: "talk" }),
    {
      name: "name",
      title: "Name",
      type: "string",
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
      name: "description",
      title: "Description",
      type: "string",
    },
  ],
};

export default talk;
