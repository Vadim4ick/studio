import clsx from "clsx";
import { ReactNode } from "react";

type BtnVariant = "primary";

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
