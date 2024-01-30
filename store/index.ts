import { create } from "zustand";

import { AnimationControls } from "framer-motion";
import { StateCreator } from "zustand";

interface AnimationControlsSlice {
  loaderControls: AnimationControls | undefined;
  navControls: AnimationControls | undefined;
  contentControls: AnimationControls | undefined;
  containerControls: AnimationControls | undefined;
  setLoaderControls: (controls: AnimationControls) => void;
  setContainerControls: (controls: AnimationControls) => void;
  setNavControls: (controls: AnimationControls) => void;
  setContentControls: (controls: AnimationControls) => void;
}

export const createAnimationControlsSlice: StateCreator<
  AnimationControlsSlice
> = (set) => ({
  loaderControls: undefined,
  navControls: undefined,
  contentControls: undefined,
  containerControls: undefined,
  setLoaderControls: (controls: AnimationControls) =>
    set({ loaderControls: controls }),
  setNavControls: (controls: AnimationControls) =>
    set({ navControls: controls }),
  setContentControls: (controls: AnimationControls) =>
    set({ contentControls: controls }),
  setContainerControls: (controls: AnimationControls) =>
    set({ containerControls: controls }),
});

export const useBoundStore = create<AnimationControlsSlice>((...a) => ({
  ...createAnimationControlsSlice(...a),
}));
