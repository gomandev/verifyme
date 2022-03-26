import clsx from "clsx";
import { ReactNode, useState } from "react";
import { FC, memo } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";

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
  placeholder = "Enter text",
  type = "text",
  onFocus = null,
  variant = "primary",
  width,
  name,
  icon,
  transparent,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div
      className={clsx(
        VariantMapper[variant],
        "flex items-center input-wrapper outline-none focus:ring-2 focus:ring-ui-purple rounded px-4 text-secondary text-extra border border-1 border-secondary",
        width ? widthMapper[width] : "w-full",
        transparent ? "bg-transparent" : "bg-accent"
      )}
      style={{ height: "50px" }}
    >
      {icon && <div className=" mr-4">{icon}</div>}
      <input
        placeholder={placeholder}
        type={showPassword ? "text" : type}
        name={name ?? "field"}
        value={value}
        onChange={onChange}
        className="outline-none w-full"
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
