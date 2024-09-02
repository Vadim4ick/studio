import { CasePrice, casesData } from "@/entities/CasePrice"

const CasesPrice = () => (
  <div className="grid h-full flex-wrap justify-center gap-3 max-mobile:flex-col max-mobile:items-center md:grid-cols-2 lg:grid-cols-3">
    {casesData.map((item) => (
      <CasePrice key={item.id} item={item} />
    ))}
  </div>
)

export { CasesPrice }
