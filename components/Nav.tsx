import { motion } from "framer-motion";
import { anim } from "@/utils/animation";
import ThemeSwitch from "@/components/ThemeSwitch";
import { navVariants } from "@/utils/animation";
import { useBoundStore } from "@/store";
import Link from "next/link";

export default function Nav() {
  const navControls = useBoundStore((state) => state.navControls);

  return (
    <motion.nav className="container overflow-hidden py-4 sm:py-8">
      <motion.div
        {...anim(navVariants)}
        animate={navControls}
        className="flex items-center justify-between "
      >
        <div>
          <Link href="/">
            <h3 className="text-off-black dark:text-off-white text-3xl font-bold uppercase italic">
              RAPLEY
            </h3>
          </Link>
        </div>

        <ul className="font-body flex items-center gap-4 text-sm uppercase sm:text-base">
          <li>
            <Link href="/">Work</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <ThemeSwitch />
          </li>
        </ul>
      </motion.div>
    </motion.nav>
  );
}
