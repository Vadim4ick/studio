import { BenefitCard } from "@/entities/BenefitItem"
import { Benefit } from "@/entities/BenefitItem"
import clsx from "clsx"
import React from "react"

type Props = {
  className?: string
  benefitsData: Benefit[]
}

const BenefitsList = React.forwardRef<HTMLDivElement, Props>(
  ({ className, benefitsData, ...props }, ref) => (
    <div ref={ref} className={clsx("", [className])} {...props}>
      {benefitsData.map((item, index) => (
        <BenefitCard key={item.id} index={index} item={item} />
      ))}
    </div>
  ),
)

export { BenefitsList }
