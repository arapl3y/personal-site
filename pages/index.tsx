import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Alex Rapley</title>
        <meta name="description" content="Alex Rapley's personal site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="pt-24">
        <div className="mr-8 max-w-sm">
          <h1 className="mb-12 text-6xl font-display">
            Alex Rapley{" "}
            <span className="text-3xl font-body">
              is a developer based on Gadigal land, currently building websites
              at{" "}
              <a
                href="//futurefriendly.team"
                className="hover:text-ffPink transition-colors hover:transition-colors"
              >
                Future Friendly
              </a>
              .
            </span>
          </h1>

          <ul className="flex gap-4 font-body">
            <li>
              <a href="mailto:rapley3@gmail.com">Email</a>
            </li>

            <li>
              <a href="//github.com/arapl3y">Github</a>
            </li>

            <li>
              <a href="//www.linkedin.com/in/alex-rapley-7a00b159/">LinkedIn</a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Home;
