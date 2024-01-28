import { AnimationControls, motion, Variants } from "framer-motion";
import { anim } from "../utils/animation";

export default function Nav({
  variants,
  controls,
}: {
  variants: Variants;
  controls: AnimationControls;
}) {
  return (
    <motion.nav className="container overflow-hidden p-2 ">
      <motion.div
        {...anim(variants)}
        animate={controls}
        className="flex items-center justify-between "
      >
        <div>
          <h3 className="text-5xl font-bold uppercase italic text-black">
            RAPLEY
          </h3>
        </div>

        <ul className="font-body flex items-center gap-8 text-lg uppercase">
          <li>Work</li>
          <li>Info</li>
          <li>Contact</li>
        </ul>
      </motion.div>
    </motion.nav>
  );
}
