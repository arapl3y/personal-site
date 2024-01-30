import { getProject, getProjectPaths } from "@/sanity/projects";
import { GetStaticProps } from "next";
import { Project } from "@/types/project";
import { ParsedUrlQuery } from "querystring";
import { PortableText } from "@portabletext/react";
import Chip from "@/components/Chip";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";
import { anim, contentVariants } from "@/utils/animation";
import { useBoundStore } from "@/store";

const Project = ({ project }: { project: Project }) => {
  const contentControls = useBoundStore((state) => state.contentControls);
  const hasPreloaded = useBoundStore((state) => state.hasPreloaded);

  // Use controls when part of intiial load sequence, otherwise just use variants
  const animateProps = !hasPreloaded ? { animate: contentControls } : {};

  return (
    <>
      <Head>
        <title>{`${project.name} | Alex Rapley`}</title>
        <meta
          name="description"
          content="Netflix Grow Creative Discovery Hub is a project that Alex Rapley worked on while at Future Friendly design studio."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.div
        {...anim(contentVariants)}
        {...animateProps}
        className="container my-20"
      >
        <Link href="/" className="text-2xl">
          ← Back
        </Link>

        <h1 className="mt-8 text-7xl font-bold uppercase italic text-black dark:text-white ">
          {project?.name}
        </h1>

        {project.url && (
          <a
            href={project.url}
            className="mt-4 block text-xl underline"
            target="_blank"
            rel="noreferrer noopener"
          >
            {project.url} ↗
          </a>
        )}

        {/* <ul className="mt-4 flex flex-wrap gap-1">
        {project.sectors?.map((sector) => (
          <Chip key={`${project.name}-${sector}`}>{sector}</Chip>
        ))}
        {project.awards?.map((award) => (
          <Chip key={`${project.name}-${award}`}>{award}</Chip>
        ))}
      </ul> */}

        <div className="mt-8 flex flex-wrap gap-2">
          {project.technologies?.map((tech) => (
            <Chip key={`${project.name}-${tech}`}>{tech}</Chip>
          ))}
        </div>

        <div className="prose my-10 max-w-4xl text-lg text-black dark:text-white">
          <PortableText value={project.content} />
        </div>

        <div className="relative mt-8 aspect-video w-full rounded-2xl">
          <Image
            src={project?.image}
            alt=""
            fill
            className="rounded-2xl"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </motion.div>
    </>
  );
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