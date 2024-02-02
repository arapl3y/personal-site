import Image from "next/image";
import SocialLinks from "@/components/SocialLinks";
import Head from "next/head";
import { motion } from "framer-motion";
import { anim, contentVariants } from "@/utils/animation";
import { useBoundStore } from "@/store";
import AlexImage from "../public/alex.png";

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
        <div className="relative flex w-full flex-col sm:h-[35rem] md:flex-row">
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl">Hello,</h1>
            <p>Thanks for visiting my site.</p>
            <p>
              If you&apos;d like to work together, don&apos;t hesitate to get in
              touch.
            </p>

            <div className="flex-end mt-6 sm:mt-12">
              <SocialLinks />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, rotate: 6 }}
            animate={{ opacity: 1, rotate: 6 }}
            whileHover={{
              rotate: 0,
              transition: { duration: 0.7, ease: [0.83, 0, 0.17, 1] },
            }}
            className="relative ml-auto mt-8 aspect-[9/12] w-1/2 md:ml-4 md:w-1/3"
          >
            <Image
              src={AlexImage}
              placeholder="blur"
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
