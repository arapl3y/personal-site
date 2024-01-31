import Image from "next/image";
import SocialLinks from "@/components/SocialLinks";
import Head from "next/head";
import { motion } from "framer-motion";
import { anim, contentVariants } from "@/utils/animation";
import { useBoundStore } from "@/store";

const Contact = () => {
  const contentControls = useBoundStore((state) => state.contentControls);
  const hasPreloaded = useBoundStore((state) => state.hasPreloaded);

  // Use controls when part of intiial load sequence, otherwise just use variants
  const animateProps = !hasPreloaded ? { animate: contentControls } : {};

  return (
    <>
      <Head>
        <title>Contact | Alex Rapley</title>
        <meta name="description" content="Page not found." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <motion.div
        {...anim(contentVariants)}
        {...animateProps}
        className="container my-12 flex"
      >
        <div className="relative flex h-[28rem] flex-col gap-4 sm:h-[35rem]">
          <h1 className="text-2xl">Hello,</h1>

          <p>I&apos;m open to interesting, creative opportunities.</p>

          <p>
            In my spare time I&apos;m enjoying learning WebGL, Blender and game
            development.
          </p>
          <p>Feel free to get in touch.</p>

          <div className="flex-end mt-6 sm:mt-12">
            <SocialLinks />
          </div>

          <motion.div
            initial={{ opacity: 0, rotate: 6 }}
            animate={{ opacity: 1 }}
            whileHover={{
              rotate: 0,
              transition: { duration: 0.7, ease: [0.83, 0, 0.17, 1] },
            }}
            className="absolute bottom-3 right-3 mt-32 aspect-[9/12] w-1/2 md:mt-8"
          >
            <Image
              src="/alex.png"
              alt="A photo of Alex Rapley playing NBA Jam on an arcade machine"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
