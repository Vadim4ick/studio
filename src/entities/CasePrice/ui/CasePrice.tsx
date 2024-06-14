import { Button } from "@/shared/ui/Button"
import { Case } from "../model/type"

interface CaseProps {
  item: Case
}

const CasePrice = (props: CaseProps) => {
  const { item } = props

  return (
    <div className="flex w-full max-w-[335px] flex-col justify-between rounded-xl bg-white px-[30px] pb-[30px]">
      <div className="flex flex-col gap-3 py-6">
        <div className="text-center text-[#7C7C7C]">Тариф</div>

        <p className="text-center text-[18px] font-bold">{item.title}</p>

        <div className="text-center text-[18px]">
          от <span className="font-bold">{item.price}</span> Р
        </div>
      </div>

      <ul className="flex h-full flex-col gap-3 py-[30px]">
        {item.services.map((service, idx) => (
          <li
            className="relative pl-[22px] text-[12px] before:absolute before:left-0 before:top-1/2 before:size-2 before:-translate-y-1/2 before:rounded-full before:bg-primary-700 before:content-['']"
            key={idx}
          >
            {service}
          </li>
        ))}
      </ul>

      <Button variant="green">Заказать</Button>
    </div>
  )
}

export { CasePrice }
