import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/shared/ui/Card"
import { Benefit } from "../model/types"
import clsx from "clsx"

interface Props extends React.ComponentProps<typeof Card> {
  className?: string
  active?: boolean
  item: Benefit
  index: number
}

export function BenefitCard({
  className,
  item,
  index,
  active,
  ...props
}: Props) {
  return (
    <Card
      style={{ boxShadow: "0px 10px 60px 0px #2A236726" }}
      className={clsx(
        "max-w-[373px] rounded-lg bg-white dark:bg-primary-50/5 hover:bg-hover-500 dark:hover:bg-hover-600 duration-500",
        {
          "cart-active": active,
        },
        className,
      )}
      {...props}
    >
      <CardHeader>
        <div className="text-[64px] font-bold text-gray/50 drop-shadow-lg">
          0{index + 1}
        </div>
        <div className="w-44 border-0 border-b border-primary-500" />

        <CardTitle
          className={clsx("text-sm font-bold", {
            "text-white dark:text-black": active,
          })}
        >
          {item.title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <CardDescription
          className={clsx("text-xs font-normal leading-none", {
            "text-white dark:text-black": active,
          })}
        >
          {item.description}
        </CardDescription>
      </CardContent>
    </Card>
  )
}
