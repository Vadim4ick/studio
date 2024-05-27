import * as React from "react"
import clsx from "clsx"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  // active?: boolean
}

const Card = (props: CardProps) => {
  const { className, children, ...otherProps } = props

  return (
    <div
      className={clsx(
        "bg-card text-card-foreground rounded-lg border shadow-sm dark:border-white",
        [className],
      )}
      {...otherProps}
    >
      {children}
    </div>
  )
}

const CardHeader = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const { className, children, ...otherProps } = props

  return (
    <div
      className={clsx("flex flex-col space-y-1.5 p-6", [className])}
      {...otherProps}
    >
      {children}
    </div>
  )
}

const CardTitle = (props: React.HTMLAttributes<HTMLHeadingElement>) => {
  const { className, children, ...otherProps } = props

  return (
    <h3
      className={clsx(
        "text-2xl font-semibold leading-none tracking-tight dark:text-white/90",
        [className],
      )}
      {...otherProps}
    >
      {children}
    </h3>
  )
}

const CardDescription = (props: React.HTMLAttributes<HTMLParagraphElement>) => {
  const { className, children, ...otherProps } = props

  return (
    <p
      className={clsx("text-muted-foreground text-sm dark:text-white/90", [
        className,
      ])}
      {...otherProps}
    >
      {children}
    </p>
  )
}

const CardContent = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const { className, children, ...otherProps } = props

  return (
    <div className={clsx("p-6 pt-0", [className])} {...otherProps}>
      {children}
    </div>
  )
}

const CardFooter = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const { className, children, ...otherProps } = props

  return (
    <div
      className={clsx("flex items-center p-6 pt-0", [className])}
      {...otherProps}
    >
      {children}
    </div>
  )
}

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
