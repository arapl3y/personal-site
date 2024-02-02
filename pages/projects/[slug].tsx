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
import { useRouter } from "next/router";

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

  // TODO: Add sector + award info

  return (
    <>
      <Head>
        <title>{`${project?.name} | Alex Rapley`}</title>
        <meta
          name="description"
          content="Netflix Grow Creative Discovery Hub is a project that Alex Rapley worked on while at Future Friendly design studio."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.div
        {...anim(contentVariants)}
        {...animateProps}
        className="container my-12"
      >
        <Link href="/">← Back</Link>

        <h2 className="mb-4 mt-8 text-2xl uppercase">{project.client}</h2>
        <h1 className="text-off-black dark:text-off-white text-3xl font-bold uppercase italic md:text-5xl">
          {project?.name}
        </h1>

        {project?.url && (
          <a
            href={project?.url}
            className="mt-4 block underline"
            target="_blank"
            rel="noreferrer noopener"
          >
            {project?.url}
          </a>
        )}

        <div className="mt-8 flex flex-wrap gap-2">
          {project.technologies?.map((tech) => (
            <Chip key={`${project?.name}-${tech}`}>{tech}</Chip>
          ))}
        </div>

        <div className="prose dark:prose-invert text-off-black dark:text-off-white my-10 max-w-4xl">
          <PortableText value={project?.content} />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {project.images?.map((image, index) => (
            <motion.div
              className="relative aspect-square rounded-2xl"
              key={index}
            >
              <Image
                src={image.url}
                alt={image.alt}
                fill
                sizes="40vw"
                className="rounded-2xl"
                style={{ objectFit: "cover" }}
              />
            </motion.div>
          ))}
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
