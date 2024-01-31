import { Variants } from "framer-motion";

export const anim = (variants: Variants, custom?: number) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants,
    custom,
  };
};

export const loaderVariants = {
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

export const containerVariants = {
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

export const navVariants = {
  initial: {
    y: 200,
  },
  enter: {
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.83, 0, 0.17, 1],
    },
  },
  exit: {},
};

export const contentVariants = {
  initial: {
    y: 50,
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.83, 0, 0.17, 1],
    },
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: [0.83, 0, 0.17, 1],
    },
  },
};
