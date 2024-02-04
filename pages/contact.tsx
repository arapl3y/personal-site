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
        <div className="flex text-center flex-col justify-center items-center mx-auto gap-4">
          <SocialLinks className="flex flex-col text-3xl md:text-5xl gap-4" />

          <motion.div
            initial={{ opacity: 0, rotate: 6 }}
            animate={{ opacity: 1, rotate: 6 }}
            whileHover={{
              rotate: 0,
              transition: { duration: 0.7, ease: [0.83, 0, 0.17, 1] },
            }}
            className="my-4 relative aspect-[9/12] w-full h-full"
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

          <p>Thanks for visiting.</p>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
