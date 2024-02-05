import { PortableTextBlock } from "sanity";

export type Project = {
  _id: string;
  _createdAt: string;
  name: string;
  slug: string;
  image: {
    url: string;
    alt: string;
    asset: any;
    crop: any;
    hotspot: any;
  };
  url: string;
  client: string;
  color: string;
  content: PortableTextBlock[];
  technologies: string[];
  awards: string[];
  sectors: string[];
  year: string;
  highlight?: boolean;
  description?: string;
  images: { url: string; alt: string }[];
  nextProject: Project;
};
