import "./styles/index.scss";
import { useTheme } from "shared/contexts/theme";
import { cn } from "shared/libs/classnames/classnames";
import { AppRouter } from "./router";
import { Navbar } from "widgets/Navbar";
import { Suspense } from "react";


export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={cn(["app", theme])}>
      <Suspense fallback="loading">
        <header>
          <Navbar toggleTheme={toggleTheme} />
        </header>

        <AppRouter />
      </Suspense>
    </div>
  );
};
