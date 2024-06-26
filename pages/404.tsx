import { motion } from "framer-motion";
import { anim, contentVariants } from "@/utils/animation";
import { useBoundStore } from "@/store";
import Meta from "@/components/Meta";

const Custom404 = () => {
  const contentControls = useBoundStore((state) => state.contentControls);
  const hasPreloaded = useBoundStore((state) => state.hasPreloaded);

  // Use controls when part of intiial load sequence, otherwise just use variants
  const animateProps = !hasPreloaded ? { animate: contentControls } : {};

  return (
    <>
      <Meta title="404 | Alex Rapley" description="Page not found." />

      <motion.div
        {...anim(contentVariants)}
        {...animateProps}
        className="container"
      >
        <div className="mt-24 flex flex-col items-center justify-center">
          <h1 className="text-8xl font-bold uppercase">404</h1>
          <p className="mt-8 text-xl">Sorry, page not found.</p>
        </div>
      </motion.div>
    </>
  );
};

export default Custom404;
