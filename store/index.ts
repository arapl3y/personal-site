import { create } from "zustand";

import { AnimationControls } from "framer-motion";
import { StateCreator } from "zustand";

interface AnimationControlsSlice {
  loaderControls: AnimationControls | undefined;
  navControls: AnimationControls | undefined;
  footerControls: AnimationControls | undefined;
  contentControls: AnimationControls | undefined;
  containerControls: AnimationControls | undefined;
  hasPreloaded: boolean;
  setHasPreloaded: (value: boolean) => void;
  setLoaderControls: (controls: AnimationControls) => void;
  setContainerControls: (controls: AnimationControls) => void;
  setNavControls: (controls: AnimationControls) => void;
  setFooterControls: (controls: AnimationControls) => void;
  setContentControls: (controls: AnimationControls) => void;
}

export const createAnimationControlsSlice: StateCreator<
  AnimationControlsSlice
> = (set) => ({
  loaderControls: undefined,
  navControls: undefined,
  footerControls: undefined,
  contentControls: undefined,
  containerControls: undefined,
  hasPreloaded: false,
  setHasPreloaded: (value: boolean) => set({ hasPreloaded: value }),
  setLoaderControls: (controls: AnimationControls) =>
    set({ loaderControls: controls }),
  setNavControls: (controls: AnimationControls) =>
    set({ navControls: controls }),
  setFooterControls: (controls: AnimationControls) =>
    set({ footerControls: controls }),
  setContentControls: (controls: AnimationControls) =>
    set({ contentControls: controls }),
  setContainerControls: (controls: AnimationControls) =>
    set({ containerControls: controls }),
});

export const useBoundStore = create<AnimationControlsSlice>((...a) => ({
  ...createAnimationControlsSlice(...a),
}));
