import Head from "next/head";

const Meta = ({
  title = "Alex Rapley",
  description = "Alex Rapley's personal site",
  image = "/meta.png",
}) => {
  console.log(image);

  return (
    <Head>
      <title>{title}</title>

      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="author" content="Alex Rapley" />
      <link rel="icon" href="/favicon.ico" />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://alexrapley.com/" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://alexrapley.com/" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
};

export default Meta;
