import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "";

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

export const urlFor = (source: SanityImageSource) =>
  imageUrlBuilder(client).image(source);

export default client;
