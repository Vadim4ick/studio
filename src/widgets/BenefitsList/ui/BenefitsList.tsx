import { Benefit, BenefitCard } from "@/entities/BenefitItem"
import clsx from "clsx"

type Props = {
  className?: string
  benefitsData: Benefit[]
}

const BenefitsList = ({ className, benefitsData }: Props) => (
  // const [activeCard] = useState(1)

  <div className={clsx("", [className])}>
    {benefitsData.map((item, index) => (
      <BenefitCard
        key={item.id}
        // active={activeCard === index}
        index={index}
        item={item}
      />
    ))}
  </div>
)

export { BenefitsList }
