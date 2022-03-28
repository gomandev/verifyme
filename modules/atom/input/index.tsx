import clsx from "clsx";
import React, { ReactNode, useState } from "react";
import { FC, memo } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";

type inputType = "text" | "number" | "email" | "password";
type variant = "primary" | "secondary" | "dark" | "white";

export interface InputProps {
  onChange: (e: any) => void;
  onKeypress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
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
  ref?: any;
  disabled?: boolean;
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
  onFocus = null,
  variant = "primary",
  width,
  name,
  icon,
  transparent,
  line,
  style,
  plain,
  onKeypress,
  ref,
  disabled,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div
      className={clsx(
        VariantMapper[variant],
        "flex items-center input-wrapper outline-none rounded px-4 text-secondary text-extra w-full",
        transparent ? "bg-transparent" : "bg-accent",
        line
          ? "border-b border-secondary rounded-none"
          : "border border-1 border-secondary"
      )}
      style={{ height: "50px", ...style }}
    >
      {icon && <div className=" mr-4">{icon}</div>}
      <input
        placeholder={placeholder}
        type={showPassword ? "text" : type}
        name={name ?? "field"}
        value={value}
        onChange={onChange}
        autoComplete={plain ? "off" : "on"}
        className="outline-none w-full"
        onKeyPress={onKeypress}
        ref={ref}
        disabled={disabled}
      />
      {(() => {
        if (type === "password") {
          if (showPassword) {
            return (
              <FiEyeOff
                color="#2b2b39"
                onClick={() => setShowPassword((current) => !current)}
                style={{ cursor: "pointer" }}
              />
            );
          } else {
            return (
              <FiEye
                color="#2b2b39"
                onClick={() => setShowPassword((current) => !current)}
                style={{ cursor: "pointer" }}
              />
            );
          }
        }
      })()}
    </div>
  );
};

export const InputComponent = memo(Component);
