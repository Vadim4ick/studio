"use client"

import { Button } from "@/shared/ui/Button"
import { Case } from "../model/type"
import { useMedia } from "@/shared/hooks/useMedia.hooks"
import { Spoller } from "@/shared/ui/Spoller"
import { useMemo } from "react"
import { Arrow } from "@/shared/icons/Arrow"
import { motion } from "framer-motion"
import { useUnit } from "effector-react"
import { $spollerPrice, openSpollerPrice } from "@/shared/context/spoller"
import { openModalConsultation } from "@/shared/context/modal"
import { formatPrice } from "@/shared/helpers/formatPrice.helper"

interface CaseProps {
  item: Case
}

const CasePrice = (props: CaseProps) => {
  const { item } = props

  const activeSpoiler = useUnit($spollerPrice)

  const isMobile768 = useMedia({ media: "max", number: 768 })

  const list = useMemo(
    () => (
      <ul className="flex h-full flex-col gap-3 py-[30px]">
        {item.services.map((service, idx) => (
          <li
            className="relative flex flex-col items-start justify-start gap-1 pl-[22px] text-[12px] before:absolute before:left-0 before:top-1/2 before:size-2 before:-translate-y-1/2 before:rounded-full before:bg-primary-700 before:content-['']"
            key={idx}
          >
            <p className="font-medium">{service.option}</p>
            <p className="text-center font-semibold">
              от <span>{formatPrice(service.price)}</span>
            </p>
          </li>
        ))}
      </ul>
    ),
    [item.services],
  )

  return (
    <div className="md:max-w-1/2 flex flex-col justify-between rounded-xl bg-white/90 px-[30px] py-[30px] duration-200 hover:bg-white/80">
      <div className="relative flex flex-col gap-3 py-6">
        <p className="text-center text-[18px] font-bold">{item.title}</p>
        <div className="text-center text-[18px]">
          от <span className="font-bold">{item.timeFrom}</span> дней
        </div>

        <svg
          className="absolute -left-[30px] bottom-0"
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="20"
          viewBox="0 0 15 20"
          fill="none"
        >
          <path d="M15 10L0 20L0 0L15 10Z" fill="#818cf8" />
        </svg>

        <svg
          className="absolute -right-[30px] bottom-0"
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="20"
          viewBox="0 0 15 20"
          fill="none"
        >
          <path d="M0 10L15 0L15 20L0 10Z" fill="#818cf8" />
        </svg>

        {isMobile768.matches && (
          <motion.button
            className="absolute right-0 top-1/2 -translate-y-1/2"
            animate={
              activeSpoiler === item.id ? { rotate: 180 } : { rotate: 0 }
            }
            onClick={() => {
              openSpollerPrice(item.id)
            }}
          >
            <Arrow className="text-[#818cf8]" />
          </motion.button>
        )}
      </div>

      {!isMobile768.matches ? (
        list
      ) : (
        <Spoller isOpen={activeSpoiler === item.id}>{list}</Spoller>
      )}

      <Button
        onClick={() => openModalConsultation()}
        className="text-sm"
        variant="secondary"
      >
        Запросить предложение
      </Button>
    </div>
  )
}

export { CasePrice }
