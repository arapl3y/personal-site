import {
  orderRankOrdering,
  orderRankField,
} from "@sanity/orderable-document-list";

const award = {
  name: "award",
  title: "Awards",
  type: "document",
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: "award" }),
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

export default award;
