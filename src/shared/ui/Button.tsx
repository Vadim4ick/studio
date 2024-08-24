import clsx from "clsx"
import { ReactNode } from "react"

type BtnVariant = "primary" | "secondary" | "green" | "outline"

interface ButtonProps extends ReactTagProps<"button"> {
  children: ReactNode
  variant?: BtnVariant
}

const Button = (props: ButtonProps) => {
  const { children, className, variant = "primary", ...otherProps } = props
  return (
    <button
      className={clsx(
        "my-auto text-center text-white",
        {
          primary: "btn-primary",
          secondary: "btn-secondary",
          green: "btn-green",
          outline: "btn-outline",
        }[variant],
        [className],
      )}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export { Button }
