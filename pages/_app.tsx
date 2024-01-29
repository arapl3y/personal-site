import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";

function App({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence mode="wait">
      <Layout>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </AnimatePresence>
  );
}

export default App;
