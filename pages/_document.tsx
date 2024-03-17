import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="stylesheet" href="https://use.typekit.net/yoc8myl.css" />
      {/* <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;700&display=swap"
        rel="preload"
        as="style"
      /> */}
      {/* <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;700&display=swap"
        rel="stylesheet"
      /> */}
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
        rel="preload"
        as="style"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
        rel="stylesheet"
      />

      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;700&display=swap"
        rel="preload"
        as="style"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;700&display=swap"
        rel="stylesheet"
      />

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
