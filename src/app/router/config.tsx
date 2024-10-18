import { lazy } from "react";
import { RouteProps } from "react-router-dom";
import { AppRoutes, RoutePaths } from "shared/config/appRoutes/appRoutes";

const MainPage = lazy(() => import("pages/MainPage/MainPage"));
const AboutPage = lazy(() => import("pages/AboutPage/AboutPage"));

export const routeConfig: Record<RoutePaths, RouteProps> = {
  [RoutePaths.MAIN]: {
    path: AppRoutes.main,
    element: <MainPage />,
  },
  [RoutePaths.PRICE]: {
    path: AppRoutes.price,
    element: <AboutPage />,
  },
  [RoutePaths.ABOUT]: {
    path: AppRoutes.about,
    element: <AboutPage />,
  },
};
