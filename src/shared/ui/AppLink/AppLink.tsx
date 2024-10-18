import { cn } from "shared/libs/classnames/classnames";
import cls from "./AppLink.module.scss";
import { Link, LinkProps } from "react-router-dom";
import { FC } from "react";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    className,
    to,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...restProps
  } = props;
  return (
    <Link
      to={to}
      className={cn([cls.appLink, cls[theme], className])}
      {...restProps}
    >
      {children}
    </Link>
  );
};
