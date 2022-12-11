import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [currentFrame, setCurrentFrame] = useState<number>(0);

  const asciiOwlFrames = [
    `
/\\_/\\
((-v-))
():::()
/---m-m---/
  `,
    `
/\\_/\\
((-v-))
():::()
/---m-m---/
  `,
    `
/\\_/\\
((ov-))
():::()
/---m-m---/
    `,
    `
/\\_/\\
((ovo))
():::()
/---m-m---/
    `,
    `
/\\_/\\
((^v^))
():::()
/---m-m---/
    `,
    `
/\\_/\\
((^v^))
():::()
/---m-m---/
    `,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev += 1) % asciiOwlFrames.length);
    }, 1250);

    return () => clearInterval(interval);
  }, [asciiOwlFrames.length]);

  return (
    <div className="container h-screen flex justify-center items-center">
      <Head>
        <title>Alex Rapley</title>
        <meta name="description" content="Alex Rapley's personal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="flex flex-col items-center justify-center text-center max-w-md">
          <pre>{asciiOwlFrames[currentFrame]}</pre>

          <ul className="flex gap-2 font-body text-blue underline text-xs">
            <li>
              <a href="//github.com/arapl3y">Github</a>
            </li>

            <li>
              <a href="//www.linkedin.com/in/alex-rapley-7a00b159/">LinkedIn</a>
            </li>

            <li>
              <a href="mailto:rapley3@gmail.com">Email</a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Home;
