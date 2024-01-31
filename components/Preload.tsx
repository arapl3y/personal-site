import { motion } from "framer-motion";
import { useRef } from "react";
import { anim, containerVariants, loaderVariants } from "@/utils/animation";
import { useBoundStore } from "@/store";

export default function Preload() {
  const titleContainerRef = useRef<HTMLDivElement | null>(null);
  const loaderControls = useBoundStore((state) => state.loaderControls);
  const containerControls = useBoundStore((state) => state.containerControls);

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
        className="bg-off-black fixed inset-0 z-10 h-screen w-screen dark:bg-[#343434]"
        onAnimationComplete={(definition: string) =>
          handleAnimationComplete(definition)
        }
      />

      {/* Text container */}
      <div
        ref={titleContainerRef}
        className="absolute left-1/2 top-1/2 z-20 flex h-screen w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center text-center"
      >
        <div className="overflow-hidden">
          <motion.h1
            {...anim(loaderVariants)}
            animate={loaderControls}
            className="text-off-black dark:text-off-white relative z-10 px-4 text-6xl font-bold uppercase italic"
          >
            Rapley
          </motion.h1>
        </div>
      </div>
    </>
  );
}
