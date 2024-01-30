import Head from "next/head";
import type { NextPage } from "next";
import { addScaleCorrector, motion } from "framer-motion";
import { anim, contentVariants } from "@/utils/animation";
import SelectWork from "@/components/SelectWork";
import OtherWork from "@/components/OtherWork";
import Awards from "@/components/Awards";
import Talks from "@/components/Talks";
import { getOtherProjects, getSelectProjects } from "@/sanity/projects";
import Info from "@/components/Info";
import { Project } from "@/types/project";
import { useBoundStore } from "@/store";

const Home: NextPage<{
  projects: Project[];
  otherProjects: Project[];
}> = ({ projects, otherProjects }) => {
  const contentControls = useBoundStore((state) => state.contentControls);
  const hasPreloaded = useBoundStore((state) => state.hasPreloaded);

  // Use controls when part of intiial load sequence, otherwise just use variants
  const animateProps = !hasPreloaded ? { animate: contentControls } : {};

  return (
    <>
      <Head>
        <title>Alex Rapley</title>
        <meta name="description" content="Alex Rapley's personal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.div
        {...anim(contentVariants)}
        {...animateProps}
        className="container px-2"
      >
        <Info />
        <SelectWork projects={projects} />
        <OtherWork projects={otherProjects} />
        <Awards />
        <Talks />
      </motion.div>
    </>
  );
};

export const getStaticProps = async () => {
  const projects = await getSelectProjects();
  const otherProjects = await getOtherProjects();

  return {
    props: {
      projects,
      otherProjects,
    },
  };
};

export default Home;
