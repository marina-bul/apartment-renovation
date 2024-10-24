import { cn } from "shared/libs/classnames/classnames";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes, FC } from "react";

type Variant = "clear" | "white" | "blue" | "red";
type Shape = "circle" | "rounded";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: Variant;
  shape?: Shape;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    variant = "red",
    shape = "rounded",
    ...restProps
  } = props;

  return (
    <button
      {...restProps}
      className={cn([cls.button, cls[variant], cls[shape], className])}
    >
      {children}
    </button>
  );
};
