import clsx from "clsx";
import { FC, ReactChild } from "react";

type ButtonVariant =
  | "fill-primary"
  | "outlined-primary"
  | "fill-secondary"
  | "outlined-secondary"
  | "fill-accent"
  | "outlined-accent";

export interface ButtonProps {
  onClick: (e: any) => void;
  children: ReactChild;
  variant: ButtonVariant;
  rounded?: boolean;
  type?: "button" | "submit" | "reset";
  style?: {};
  icon?: ReactChild;
  shadow?: boolean;
}

const ButtonMapper: Record<ButtonVariant, string> = {
  "fill-primary":
    "middle-btn text-accent bg-primary hover:bg-primaryDark border border hover:text-accent rounded",
  "outlined-primary":
    "middle-btn text-ui-purple bg-transparent  hover:bg-ui-purple border border border-ui-purple hover:text-accent  ",
  "fill-secondary":
    "middle-btn text-accent bg-secondary  hover:bg-transparent text-accent hover:text-main-red",
  "outlined-secondary":
    "middle-btn text-main-red bg-transparent hover:bg-primary hover:bg-main-red border border border-secondary hover:text-accent ",
  "fill-accent":
    "middle-btn text-secondary bg-accent hover:bg-transparent hover:text-main-blue",
  "outlined-accent":
    "middle-btn text-main-blue bg-transparent  hover:bg-main-blue border border border-main-blue hover:text-accent ",
};

export const Button: FC<ButtonProps> = ({
  onClick,
  variant,
  children,
  rounded = false,
  type = "button",
  style,
  icon,
  shadow,
}) => (
  <button
    type={type}
    data-testid="main-button-cp"
    onClick={(e: any) => onClick(e)}
    style={style}
    className={clsx(
      "justify-between items-center outline-none text-lg transition duration-500  ease-in-out py-2 px-5 hover:border-opacity-100 rounded",
      ButtonMapper[variant],
      rounded ? "rounded-lg" : "rounded-md",
      shadow && "shadow-md",
      icon ? "flex" : "inline-block"
    )}
  >
    {children}
    {icon && icon}
  </button>
);
