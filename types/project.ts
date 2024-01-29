import { PortableTextBlock } from "sanity";

export type Project = {
  _id: string;
  _createdAt: string;
  name: string;
  slug: string;
  image: string;
  url: string;
  color: string;
  content: PortableTextBlock[];
  technologies: string[];
  awards: string[];
  sectors: string[];
  year: string;
  highlight?: boolean;
  description?: string;
};
