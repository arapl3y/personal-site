import { ReactNode, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function Layout({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }, []);

  return <>{children}</>;
}
