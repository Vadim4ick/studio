import clsx from "clsx";
import { ReactNode } from "react";

type BtnVariant = "primary" | "secondary";

interface ButtonProps extends ReactTagProps<"button"> {
  children: ReactNode;
  variant?: BtnVariant;
}

const Button = (props: ButtonProps) => {
  const { children, className, variant = "primary", ...otherProps } = props;

  return (
    <button
      className={clsx(
        "text-center text-white",
        {
          primary: "btn-primary",
          secondary: "btn-secondary",
        }[variant],
        [className],
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export { Button };
