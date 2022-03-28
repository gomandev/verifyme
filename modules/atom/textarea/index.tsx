import clsx from "clsx";
import { ReactNode } from "react";
import { FC, memo } from "react";

type inputType = "text" | "number" | "email" | "password";
type variant = "primary" | "secondary" | "dark" | "white";

export interface InputProps {
  onChange: (e: any) => void;
  onFocus?: (e: any) => void | undefined;
  value?: string;
  placeholder?: string;
  type?: inputType;
  variant: variant;
  width?: string;
  name?: string;
  icon?: ReactNode;
  transparent?: boolean;
  line?: boolean;
  style?: {};
  plain?: boolean;
}

const VariantMapper: Record<variant, string> = {
  primary: "",
  secondary: "",
  dark: "",
  white: "",
};

const widthMapper = {
  sm: "w-10",
  md: "w-16",
  lg: "w-20",
};

const Component: FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  type = "text",
  variant = "primary",
  width,
  name,
  transparent,
  style,
  plain,
}) => {
  return (
    <textarea
      className={clsx(
        VariantMapper[variant],
        "flex items-center input-wrapper outline-none rounded px-4 text-secondary text-extra border border-1 border-secondary",
        width ? widthMapper[width] : "w-full",
        transparent ? "bg-transparent" : "bg-accent"
      )}
      placeholder={placeholder}
      name={name ?? "field"}
      value={value}
      onChange={onChange}
      autoComplete={plain ? "off" : "on"}
      style={style}
    ></textarea>
  );
};

export const Textarea = memo(Component);
