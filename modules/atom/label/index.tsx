import { ReactChild } from "react";

export const Label = ({
  children,
  htmlFor,
}: {
  children: ReactChild;
  htmlFor?: string;
}) => {
  return (
    <label className="text-secondary font-bold text-xl" htmlFor={htmlFor}>
      {children}
    </label>
  );
};
