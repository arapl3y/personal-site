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
        className="my:12 container flex justify-center sm:my-24"
      >
        <div className="relative flex h-[28rem] flex-col gap-4 sm:h-[35rem]">
          <h1 className="text-2xl">G&apos;day!</h1>

          <div className="ml-6 sm:ml-12">
            <p>
              I&apos;m always open to freelance opportunities, especially for
              interesting, creative projects.
            </p>

            <p>
              In my spare time I&apos;m enjoying learning WebGL and game
              development.
            </p>
            <p>Feel free to get in touch.</p>
          </div>

          <div className="flex-end mt-6 sm:mt-12">
            <SocialLinks />
          </div>

          <div className="absolute bottom-3 right-3 aspect-[9/12] w-1/2 ">
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
