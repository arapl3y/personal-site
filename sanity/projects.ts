import { Project } from "@/types/project";
import { client } from "./client";

export async function getSelectProjects() {
  const query = `
    *[_type == "project" && highlight == true]|order(orderRank){
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "imageUrl": image.asset->url,
      "imageAlt": image.alt,
      url,
      client,
      content,
      technologies,
      awards,
      sectors,
      year,
      highlight,
      description
    }
  `;

  return await client.fetch<Project[]>(query);
}

export async function getProject(slug: string) {
  const query = `
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    _createdAt,
    name,
    client,
    "slug": slug.current,
    "images": images[] {
      "url": asset->url,
      "alt": alt
    },
    url,
    content,
    technologies,
    awards,
    sectors,
    year,
    "nextProject": nextProject->{
      name,
      "imageUrl": image.asset->url,
      "imageAlt": image.alt,
      "slug": slug.current,
      sectors,
      description
    }
  }
`;

  return await client.fetch<Project>(query, { slug });
}

export async function getOtherProjects() {
  // Only get projects with highlight == true
  const query = `
    *[_type == "project" && highlight == false]|order(orderRank){
      _id,
      _createdAt,
      name,
      "image": image.asset->url,
      url,
      awards,
      sectors,
      year,
      highlight,
      description
    }
  `;

  return await client.fetch<Project[]>(query);
}

export async function getProjectPaths() {
  const query = `
    *[_type == "project" && highlight == true]{
      "slug": slug.current
    }
  `;

  const projects = await client.fetch<Project[]>(query);

  return projects.map((project) => {
    return {
      params: {
        slug: project.slug,
      },
    };
  });
}
