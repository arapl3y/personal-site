import { getProject, getProjectPaths } from "@/sanity/projects";
import { GetStaticProps } from "next";
import { Project } from "@/types/project";
import { ParsedUrlQuery } from "querystring";

const Project = ({ project }: { project: Project }) => {
  return <div>{project?.name}</div>;
};

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as Params;
  const project = await getProject(slug);

  return {
    props: {
      project,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = await getProjectPaths();

  return {
    paths,
    fallback: true,
  };
};

export default Project;
