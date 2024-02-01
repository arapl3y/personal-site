import { motion } from "framer-motion";
import { anim } from "@/utils/animation";
import ThemeSwitch from "@/components/ThemeSwitch";
import { navVariants } from "@/utils/animation";
import { useBoundStore } from "@/store";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav() {
  const router = useRouter();
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
              AR.
            </h3>
          </Link>
        </div>

        <ul className="font-body flex items-center gap-4 text-sm uppercase sm:text-base">
          <li className={router.pathname === "/" ? "line-through" : ""}>
            <Link href="/">Work</Link>
          </li>
          <li className={router.pathname === "/contact" ? "line-through" : ""}>
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
