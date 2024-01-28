import { Variants } from "framer-motion";

// Shout out to Olivier Larose for this neat little pattern
export const anim = (variants: Variants, custom?: number) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
    custom,
  };
};
