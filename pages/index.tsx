import { useEffect, useRef, useState } from "react";
import Head from "next/head";
import type { NextPage } from "next";
import gsap from "gsap";
import SplitType from "split-type";

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

const Home: NextPage = () => {
  const [splitText, setSplitText] = useState<SplitType>();
  const linksRef = useRef<HTMLAnchorElement[]>([]);

  // Title animation
  useEffect(() => {
    const splitTitle = new SplitType(".title", {
      types: "chars",
    });

    gsap.to(splitTitle.chars, {
      yPercent: -100,
      duration: 0.8,
      ease: "power4.inOut",
      stagger: { each: 0.02 },
      onComplete() {
        gsap.set(splitTitle.chars, {
          yPercent: 0,
        });
      },
    });

    return () => {
      splitTitle.revert();
    };
  }, []);

  // Split text for link animation
  useEffect(() => {
    const splitLinks = new SplitType(".menu-link", {
      types: "chars",
    });

    setSplitText(splitLinks);

    return () => {
      splitLinks.revert();
    };
  }, []);

  // Resize
  useEffect(() => {
    function handleResize() {
      if (!splitText) return;

      splitText.revert();

      const splitLinks = new SplitType(".menu-link", {
        types: "chars,words",
      });

      setSplitText(splitLinks);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  // Handlers for animation
  const handleMouseEnter = (index: number) => {
    const chars = linksRef.current[index].querySelectorAll(".char");

    gsap.to(chars, {
      yPercent: -80,
      duration: 0.5,
      ease: "power4.inOut",
      stagger: { each: 0.01 },
      overwrite: true,
    });
  };

  const handleMouseLeave = (index: number) => {
    const chars = linksRef.current[index].querySelectorAll(".char");

    gsap.to(chars, {
      yPercent: 0,
      duration: 0.4,
      ease: "power4.inOut",
      stagger: { each: 0.01 },
    });
  };

  return (
    <div className="container h-screen flex justify-center items-center">
      <Head>
        <title>🚧 🚧 🚧</title>
        <meta name="description" content="Alex Rapley's personal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="title text-3xl md:text-6xl xl:text-8xl font-bold uppercase overflow-hidden whitespace-nowrap">
            Under construction
          </h1>

          <ul className="mt-20 flex gap-8 font-body uppercase text-md md:text-2xl font-bold overflow-hidden">
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="menu-link stagger-link"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  ref={(el) => el && linksRef.current?.push(el)}
                >
                  <span className="menu-link-text">{link.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Home;
