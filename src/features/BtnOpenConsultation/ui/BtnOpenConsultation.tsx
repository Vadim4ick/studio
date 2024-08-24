"use client"

import { openModalConsultation } from "@/shared/context/modal"
import { Button } from "@/shared/ui/Button"

const BtnOpenConsultation = () => (
  <Button
    className="text-xs"
    variant="secondary"
    onClick={() => openModalConsultation()}
  >
    Узнать стоимость
  </Button>
)

export { BtnOpenConsultation }
