import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import Layout from "@/components/Layout";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { checkAdminDashboardRoute } from "@/utils/admin";

function App({ Component, pageProps, router }: AppProps) {
  const isAdminRoute = checkAdminDashboardRoute(router);

  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <Layout>
          {!isAdminRoute && <Nav />}

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

          {!isAdminRoute && <Footer />}
        </Layout>
      </ThemeProvider>

      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
