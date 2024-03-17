import { getProject, getProjectPaths } from "@/sanity/projects";
import { GetStaticProps } from "next";
import type { Project } from "@/types/project";
import { ParsedUrlQuery } from "querystring";
import { PortableText } from "@portabletext/react";
import Chip from "@/components/Chip";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";
import { anim, contentVariants } from "@/utils/animation";
import { useBoundStore } from "@/store";
import { useRouter } from "next/router";
import ProjectSection from "@/components/ProjectSection";
import { urlFor } from "@/sanity/client";
import Meta from "@/components/Meta";

const Project = ({ project }: { project: Project }) => {
  const contentControls = useBoundStore((state) => state.contentControls);
  const hasPreloaded = useBoundStore((state) => state.hasPreloaded);

  // Use controls when part of intiial load sequence, otherwise just use variants
  const animateProps = !hasPreloaded ? { animate: contentControls } : {};

  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return null;
  }

  return (
    <>
      <Meta
        title={`${project?.name} | Alex Rapley`}
        description={project?.description}
        image={project?.image?.url}
      />

      <motion.div
        {...anim(contentVariants)}
        {...animateProps}
        className="container my-12"
      >
        <Link href="/">← Back</Link>

        <h2 className="mb-2 mt-8 text-2xl sm:text-3xl uppercase">
          {project.client}
        </h2>
        <h1 className="text-off-black dark:text-off-white text-3xl font-bold uppercase md:text-5xl italic">
          {project?.name}
        </h1>

        <div className="flex flex-wrap mt-8 gap-8 md:gap-16">
          <div className="flex flex-col w-full md:w-1/3">
            <h4 className="uppercase mb-5 md:mb-2 font-bold">Technology</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies?.map((tech) => (
                <Chip key={`${project?.name}-${tech}`}>{tech}</Chip>
              ))}
            </div>
          </div>

          {project.awards?.length > 0 && (
            <div className="flex flex-col w-full md:w-1/4">
              <h4 className="uppercase mb-5 md:mb-2 font-bold">Recognition</h4>
              <Image
                src="/gda-winner.png"
                width={90}
                height={0}
                alt="GDA Winner"
                className="mt-2 h-auto dark:invert"
              />
            </div>
          )}

          {project?.url && (
            <div className="flex flex-col w-full md:w-1/4">
              <h4 className="uppercase mb-5 md:mb-2 font-bold">Link</h4>
              <a
                href={project?.url}
                className="block underline"
                target="_blank"
                rel="noreferrer noopener"
              >
                {project?.url}
              </a>
            </div>
          )}
        </div>

        <div className="prose dark:prose-invert text-off-black dark:text-off-white my-10 max-w-4xl">
          <PortableText value={project?.content} />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {project?.images?.map((image, index) => (
            <motion.div
              className="relative aspect-square rounded-2xl"
              key={index}
            >
              <Image
                src={urlFor(image).url()}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw"
                className="rounded-2xl"
                style={{ objectFit: "cover" }}
              />
            </motion.div>
          ))}
        </div>

        <h3 className="text-4xl font-bold uppercase mt-32 mb-8 italic">Next</h3>
        <div>
          <ProjectSection project={project.nextProject} index={0} />
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

  if (!project) {
    return {
      notFound: true,
    };
  }

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
