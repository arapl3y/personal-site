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
        className="container my-32 flex justify-center"
      >
        <div className="relative flex h-[35rem] flex-col gap-4">
          <h1 className="text-2xl">G&apos;day!</h1>
          <p className="ml-12">
            I&apos;m always open to freelance opportunities, especially for
            interesting, creative projects.
          </p>

          <p className="ml-12">
            In my spare time I&apos;m enjoying learning WebGL and game
            development.
          </p>
          <p className="ml-12">Feel free to get in touch.</p>

          <div className="mt-32">
            <SocialLinks />
          </div>

          <div className="absolute bottom-0 right-0 aspect-[9/12] w-1/2">
            <Image
              src="/alex.png"
              alt="A photo of Alex Rapley playing NBA Jam on an arcade machine"
              fill
              style={{ objectFit: "cover" }}
              className="mt-24 rotate-6 transform rounded-2xl"
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
