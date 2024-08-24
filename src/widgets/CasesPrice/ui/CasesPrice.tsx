import { CasePrice, casesData } from "@/entities/CasePrice"

const CasesPrice = () => (
  <div className="flex h-full justify-between gap-3 max-mobile:flex-col max-mobile:items-center">
    {casesData.map((item) => (
      <CasePrice key={item.id} item={item} />
    ))}
  </div>
)

export { CasesPrice }
