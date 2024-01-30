import { AnimationControls, motion, useAnimation } from "framer-motion";
import { anim } from "../utils/animation";

export default function Contact() {
  const links = [
    {
      href: "//github.com/arapl3y",
      text: "Github ↗",
    },
    {
      href: "//www.linkedin.com/in/alex-rapley-7a00b159/",
      text: "LinkedIn ↗",
    },
    {
      href: "mailto:rapley3@gmail.com",
      text: "Email ↗",
    },
  ];

  return (
    <footer className="container">
      <ul className="flex justify-end gap-4 overflow-hidden text-lg font-bold uppercase italic">
        {links.map((link) => (
          <SocialLink link={link} key={link.href} />
        ))}
      </ul>
    </footer>
  );
}

const SocialLink = ({ link }: { link: { text: string; href: string } }) => {
  const controls = useAnimation();

  const textStagger = {
    initial: (i: number) => ({
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.76, 0, 0.24, 1],
        delay: i * 0.01,
      },
    }),
    hover: (i: number) => ({
      y: -25,
      transition: {
        duration: 0.4,
        ease: [0.76, 0, 0.24, 1],
        delay: i * 0.01,
      },
    }),
    exit: {},
  };

  function splitText(text: string, controls: AnimationControls) {
    return text.split("").map((char, i) => (
      <motion.span
        className="menu-link-text relative inline-block"
        key={i}
        {...anim(textStagger, i)}
        animate={controls}
      >
        {char}
      </motion.span>
    ));
  }

  return (
    <li>
      <a
        href={link.href}
        onMouseEnter={() => controls.start("hover")}
        onMouseLeave={() => controls.start("initial")}
      >
        {splitText(link.text, controls)}
      </a>
    </li>
  );
};
