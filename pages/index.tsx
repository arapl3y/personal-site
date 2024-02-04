import Head from "next/head";
import type { NextPage } from "next";
import { motion } from "framer-motion";
import { anim, contentVariants } from "@/utils/animation";
import SelectWork from "@/components/SelectWork";
import OtherWork from "@/components/OtherWork";
import Awards from "@/components/Awards";
import Talks from "@/components/Talks";
import { getOtherProjects, getSelectProjects } from "@/sanity/projects";
import Info from "@/components/Info";
import { Project } from "@/types/project";
import { useBoundStore } from "@/store";
import { getAwards } from "@/sanity/awards";
import { Award } from "@/types/award";
import { getTalks } from "@/sanity/talk";
import { Talk } from "@/types/talk";
import Contact from "@/components/Contact";

const Home: NextPage<{
  awards: Award[];
  projects: Project[];
  otherProjects: Project[];
  talks: Talk[];
}> = ({ projects, otherProjects, awards, talks }) => {
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
        className="container"
      >
        <Info />
        <SelectWork projects={projects} />
        <OtherWork projects={otherProjects} />
        <Awards awards={awards} />
        <Talks talks={talks} />
        <Contact />
      </motion.div>
    </>
  );
};

export const getStaticProps = async () => {
  const projects = await getSelectProjects();
  const otherProjects = await getOtherProjects();
  const awards = await getAwards();
  const talks = await getTalks();

  return {
    props: {
      projects,
      otherProjects,
      awards,
      talks,
    },
  };
};

export default Home;
