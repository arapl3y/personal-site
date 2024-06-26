import { ReactNode, useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useBoundStore } from "@/store";
import Preload from "@/components/Preload";
import { useRouter } from "next/router";
import { checkAdminDashboardRoute } from "@/utils/admin";

export default function Layout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const isAdminRoute = checkAdminDashboardRoute(router);

  // TODO: Update this to use Framer Motion's animate method

  // Animation controls
  const loaderControls = useAnimation();
  const containerControls = useAnimation();
  const navControls = useAnimation();
  const contentControls = useAnimation();
  const footerControls = useAnimation();

  // Set animation controls in shared state
  const setLoaderControls = useBoundStore((state) => state.setLoaderControls);
  const setContainerControls = useBoundStore(
    (state) => state.setContainerControls
  );
  const setNavControls = useBoundStore((state) => state.setNavControls);
  const setFooterControls = useBoundStore((state) => state.setFooterControls);
  const setContentControls = useBoundStore((state) => state.setContentControls);
  const setHasPreloaded = useBoundStore((state) => state.setHasPreloaded);

  setLoaderControls(loaderControls);
  setContainerControls(containerControls);
  setNavControls(navControls);
  setFooterControls(footerControls);
  setContentControls(contentControls);

  // First load animation sequence
  useEffect(() => {
    const loaderSequence = async () => {
      await loaderControls.start("initial");
      await containerControls.start("initial");
      await navControls.start("initial");
      await contentControls.start("initial");
      await footerControls.start("initial");

      containerControls.start("enter");
      loaderControls.start("enter");

      await loaderControls.start("exit");
      containerControls.start("exit");

      navControls.start("enter");
      contentControls.start("enter");
      footerControls.start("enter");

      setHasPreloaded(true);
    };

    loaderSequence();
  }, [
    containerControls,
    loaderControls,
    navControls,
    footerControls,
    contentControls,
    setLoaderControls,
    setContainerControls,
    setNavControls,
    setContentControls,
    setHasPreloaded,
  ]);

  return (
    <>
      {/* Don't want to show preload animation if editing in the CMS */}
      {!isAdminRoute && <Preload />}

      <div className="flex flex-col h-full">{children}</div>
    </>
  );
}
