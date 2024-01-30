import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import Layout from "@/components/Layout";
import Nav from "@/components/Nav";

function App({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Nav />
        <AnimatePresence mode="wait">
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
