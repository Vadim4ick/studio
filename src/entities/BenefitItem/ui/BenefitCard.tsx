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
      className={clsx(
        "max-w-[373px] !shadow-lg",
        {
          "cart-active": active,
        },
        className,
      )}
      {...props}
    >
      <CardHeader>
        <div className="text-[64px] font-bold text-white drop-shadow-lg">
          0{index + 1}
        </div>
        <div className="w-44 border-0 border-b-2 border-cardBorderBottom" />

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
