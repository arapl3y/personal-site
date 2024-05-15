import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import config from "@/sanity.config";

const { projectId, dataset, apiVersion } = config;

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

export const urlFor = (source: SanityImageSource) =>
  imageUrlBuilder(client).image(source);

export default client;
