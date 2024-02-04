import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import Layout from "@/components/Layout";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

function App({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Layout>
        <Nav />
        <AnimatePresence
          mode="wait"
          onExitComplete={() => {
            if (typeof window !== "undefined") {
              window.scrollTo(0, 0);
            }
          }}
        >
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
        <Footer />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
