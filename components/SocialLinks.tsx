export default function SocialLinks() {
  const links = [
    {
      href: "//www.linkedin.com/in/alex-rapley-7a00b159/",
      text: "LinkedIn",
    },
    {
      href: "mailto:rapley3@gmail.com",
      text: "Email",
    },
    {
      href: "//github.com/arapl3y",
      text: "GitHub",
    },
  ];

  return (
    <ul className="flex gap-4">
      {links.map((link) => (
        <a
          key={link.text}
          href={link.href}
          rel="noopener noreferrer"
          target="_blank"
          className="bg-off-black dark:text-off-black text-off-white rounded border px-4 py-1 text-xs uppercase sm:text-sm dark:bg-white"
        >
          {link.text} ↗
        </a>
      ))}
    </ul>
  );
}

// const SocialLink = ({ link }: { link: { text: string; href: string } }) => {
//   const controls = useAnimation();

//   const textStagger = {
//     initial: (i: number) => ({
//       y: 0,
//       transition: {
//         duration: 0.4,
//         ease: [0.76, 0, 0.24, 1],
//         delay: i * 0.01,
//       },
//     }),
//     hover: (i: number) => ({
//       y: -25,
//       transition: {
//         duration: 0.4,
//         ease: [0.76, 0, 0.24, 1],
//         delay: i * 0.01,
//       },
//     }),
//     exit: {},
//   };

//   function splitText(text: string, controls: AnimationControls) {
//     return text.split("").map((char, i) => (
//       <motion.span
//         className="menu-link-text relative inline-block"
//         key={i}
//         {...anim(textStagger, i)}
//         animate={controls}
//       >
//         {char}
//       </motion.span>
//     ));
//   }

//   return (
//     <li>
//       <a
//         href={link.href}
//         onMouseEnter={() => controls.start("hover")}
//         onMouseLeave={() => controls.start("initial")}
//       >
//         {splitText(link.text, controls)}
//       </a>
//     </li>
//   );
// };
