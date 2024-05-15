import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import Layout from "@/components/Layout";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

function App({ Component, pageProps, router }: AppProps) {
  const isAdminDashboard = router.pathname.includes("admin");

  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <Layout>
          {!isAdminDashboard && <Nav />}

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

          {!isAdminDashboard && <Footer />}
        </Layout>
      </ThemeProvider>

      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
