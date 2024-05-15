import { NextRouter } from "next/router";

export const checkAdminDashboardRoute = (router: NextRouter) =>
  router.pathname.includes("admin");
