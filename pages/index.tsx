import Head from "next/head";
import type { NextPage, InferGetStaticPropsType } from "next";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import Nav from "@/components/Nav";
import Preload from "@/components/Preload";
// import Contact from "@/components/Contact";
import { anim } from "@/utils/animation";
import SelectWork from "@/components/SelectWork";
import OtherWork from "@/components/OtherWork";
import Awards from "@/components/Awards";
import Talks from "@/components/Talks";
import { getOtherProjects, getSelectProjects } from "@/sanity/projects";
import Info from "@/components/Info";

const Home: NextPage<{
  projects: InferGetStaticPropsType<typeof getStaticProps>;
  otherProjects: InferGetStaticPropsType<typeof getStaticProps>;
}> = ({ projects, otherProjects }) => {
  const showPreload = useRef<boolean>(true);
  const titleControls = useAnimation();
  const containerControls = useAnimation();
  const navTitleControls = useAnimation();

  const title = {
    initial: {
      y: 0,
      display: "block",
    },
    enter: {
      filter: "invert(1)",
      transition: {
        delay: 0.4,
        duration: 0,
      },
    },
    exit: {
      y: 100,
      transition: {
        duration: 0.7,
        ease: [0.83, 0, 0.17, 1],
        delay: 0.8,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  const container = {
    initial: {
      y: "-100%",
    },
    enter: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.85, 0, 0.15, 1],
      },
    },
    exit: {
      y: "-100%",
      transition: {
        ease: [0.85, 0, 0.15, 1],
        duration: 0.8,
      },
    },
  };

  const navTitle = {
    initial: {
      y: 200,
    },
    enter: {
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.83, 0, 0.17, 1],
        delay: 0.2,
      },
    },
    exit: {},
  };

  const content = {
    initial: {
      y: 100,
      opacity: 0,
    },
    enter: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 1.7,
        duration: 0.8,
        ease: [0.83, 0, 0.17, 1],
      },
    },
    exit: {},
  };

  useEffect(() => {
    const animSequence = async () => {
      await titleControls.start("initial");
      await containerControls.start("initial");
      await navTitleControls.start("initial");

      containerControls.start("enter");
      titleControls.start("enter");

      await titleControls.start("exit");
      containerControls.start("exit");

      await navTitleControls.start("enter");

      showPreload.current = false;
    };

    // Only want to show the preload animation on first load
    showPreload.current && animSequence();
  }, [containerControls, navTitleControls, titleControls]);

  return (
    <>
      <Head>
        <title>Alex Rapley</title>
        <meta name="description" content="Alex Rapley's personal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav variants={navTitle} controls={navTitleControls} />

      <Preload
        titleVariants={title}
        titleControls={titleControls}
        containerVariants={container}
        containerControls={containerControls}
      />

      <motion.div {...anim(content)} className="container px-2">
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

// export const getStaticPaths = async () => {
//   const paths = await getProjectPaths();

//   return {
//     paths,
//     fallback: true,
//   };
// };

export default Home;
