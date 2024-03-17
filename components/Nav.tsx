import { motion } from "framer-motion";
import { anim } from "@/utils/animation";
import ThemeSwitch from "@/components/ThemeSwitch";
import { navVariants } from "@/utils/animation";
import { useBoundStore } from "@/store";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const links = [
  {
    name: "Work",
    href: "/",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Nav() {
  const [selected, setSelected] = useState<string>();
  const router = useRouter();
  const navControls = useBoundStore((state) => state.navControls);

  useEffect(() => {
    if (router.pathname === "/") {
      setSelected("work");
    } else if (router.pathname === "/contact") {
      setSelected("contact");
    }
  }, [router.pathname]);

  return (
    <nav className="container overflow-hidden pt-4 pb-[3.5rem] sm:pt-8">
      <motion.div
        {...anim(navVariants)}
        animate={navControls}
        className="flex items-center justify-between"
      >
        <div>
          <Link href="/">
            <h3 className="text-off-black dark:text-off-white text-4xl sm:text-6xl font-bold uppercase">
              AR
            </h3>
          </Link>
        </div>

        <ul className="font-body flex items-center gap-4 text-sm uppercase sm:text-base">
          {links.map((link) => {
            return (
              <li
                onClick={() => setSelected(link.name.toLowerCase())}
                className="relative text-white"
                key={link.name}
              >
                <Link
                  href={link.href}
                  className={`relative rounded px-2 py-1 transition`}
                >
                  {/* TODO: Fix bug on light mode */}
                  <span className="relative z-10 mix-blend-exclusion">
                    {link.name}
                  </span>

                  {selected === link.name.toLowerCase() && (
                    <motion.div
                      layoutId="selected-nav-link"
                      style={{ borderRadius: 5 }}
                      className="bg-off-black dark:bg-off-white absolute inset-0"
                      transition={{ type: "spring", duration: 0.6 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}

          <li>
            <ThemeSwitch />
          </li>
        </ul>
      </motion.div>
    </nav>
  );
}
