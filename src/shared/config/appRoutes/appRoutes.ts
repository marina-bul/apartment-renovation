export enum RoutePaths {
  MAIN = "main",
  PRICE = "price",
  ABOUT = "about",
}

export const AppRoutes: Record<RoutePaths, string> = {
  [RoutePaths.MAIN]: "/",
  [RoutePaths.PRICE]: "/price",
  [RoutePaths.ABOUT]: "/about",
};
