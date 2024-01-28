import Head from "next/head";
import type { NextPage } from "next";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import Nav from "../components/Nav";
import Preload from "../components/Preload";
import Contact from "../components/Contact";
import { anim } from "../utils/animation";

const Home: NextPage = () => {
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
      y: "100%",
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
        <section className=" my-32 flex flex-col gap-4 text-3xl">
          <p>
            Lead Product Engineer at{" "}
            <a href="https://futurefriendly.team">Future Friendly</a>.
          </p>
          <div className="ml-8 flex flex-col gap-4">
            <p>— Full-stack development</p>
            <p>— Creative coding</p>
            <p>— Interaction design</p>
          </div>
          <p>Based on Gadigal land, Australia</p>
        </section>

        <section className="my-32 px-2">
          <h1 className="text-6xl font-bold uppercase italic">Select work</h1>

          <div className="mt-12 grid grid-cols-2 gap-x-20 gap-y-20">
            <div className="aspect-[9/10] w-full rounded-xl bg-gray-200"></div>
            <div className="aspect-[9/10] w-full rounded-xl bg-gray-200"></div>
            <div className="aspect-[9/10] w-full rounded-xl bg-gray-200"></div>
            <div className="aspect-[9/10] w-full rounded-xl bg-gray-200"></div>
          </div>
        </section>

        <section className="my-32 px-2">
          <h1 className="text-6xl font-bold uppercase italic">Other work</h1>

          <div className="mt-12 grid grid-cols-1 divide-y divide-black">
            <div className="py-4">
              <p>
                Project 1 — 2022 — A tourism companion experience for finding
                the best places to visit in Australia.
              </p>
            </div>
            <div className="py-4">
              <p>
                Project 1 — 2022 — A tourism companion experience for finding
                the best places to visit in Australia.
              </p>
            </div>
            <div className="py-4">
              <p>
                Project 1 — 2022 — A tourism companion experience for finding
                the best places to visit in Australia.
              </p>
            </div>
          </div>
        </section>

        <section className="my-32 px-2">
          <h1 className="text-6xl font-bold uppercase italic">Awards</h1>

          <div className="mt-12 grid grid-cols-1 divide-y divide-black">
            <div className="py-4">
              <p>Good Design Award 2022</p>
            </div>
            <div className="py-4">
              <p>Good Design Award 2022</p>
            </div>
            <div className="py-4">
              <p>Good Design Award 2022</p>
            </div>
            <div className="py-4">
              <p>GovHack winner 2019</p>
            </div>
          </div>
        </section>

        <section className="my-32 px-2">
          <h1 className="text-6xl font-bold uppercase italic">Talks</h1>

          <div className="mt-12 grid grid-cols-1 divide-y divide-black">
            <div className="py-4">
              <p>Make art with code</p>
            </div>
            <div className="py-4">
              <p>Roadmapping 101</p>
            </div>
          </div>
        </section>

        <section className="my-32 px-2">
          <h1 className="text-6xl font-bold uppercase italic">Get in touch</h1>

          <Contact />
        </section>
      </motion.div>
    </>
  );
};

export default Home;
