"use client"

import { CasePrice, casesData } from "@/entities/CasePrice"
import { setSpollerPriceId } from "@/shared/context/spoller"
import { useMedia } from "@/shared/hooks/useMedia.hooks"
import { useEffect } from "react"

const CasesPrice = () => {
  const isMobile768 = useMedia({ media: "max", number: 768 })

  useEffect(() => {
    if (isMobile768.matches) {
      setSpollerPriceId(1)
    }
  }, [isMobile768.matches])

  return (
    <div className="grid h-full flex-wrap justify-center gap-3 max-mobile:flex-col max-mobile:items-center md:grid-cols-2 lg:grid-cols-3">
      {casesData.map((item) => (
        <CasePrice key={item.id} item={item} />
      ))}
    </div>
  )
}

export { CasesPrice }
