import { AnimationControls, motion, Variants } from "framer-motion";
import { useRef } from "react";
import { anim } from "../utils/animation";

export default function Preload({
  containerVariants,
  containerControls,
  titleVariants,
  titleControls,
}: {
  containerVariants: Variants;
  containerControls: AnimationControls;
  titleVariants: Variants;
  titleControls: AnimationControls;
}) {
  const titleContainerRef = useRef<HTMLDivElement | null>(null);

  function handleAnimationComplete(definition: string) {
    // Hide title container once animation is complete
    if (!titleContainerRef.current) return;

    if (definition === "exit") {
      titleContainerRef.current.style.display = "none";
    }
  }

  return (
    <>
      {/* Slide */}
      <motion.div
        {...anim(containerVariants)}
        animate={containerControls}
        className="z-1 fixed inset-0 h-screen w-screen bg-black"
        onAnimationComplete={(definition: string) =>
          handleAnimationComplete(definition)
        }
      />

      <div
        ref={titleContainerRef}
        className="z-2 absolute left-1/2 top-1/2 flex h-screen w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center text-center"
      >
        <div className="overflow-hidden">
          <motion.h1
            {...anim(titleVariants)}
            animate={titleControls}
            className="relative z-10 px-4 text-8xl font-bold uppercase italic text-black"
          >
            RAPLEY
          </motion.h1>
        </div>
      </div>
    </>
  );
}
