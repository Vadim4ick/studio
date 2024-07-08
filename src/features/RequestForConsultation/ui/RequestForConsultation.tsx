"use client"
import { Button } from "@/shared/ui/Button"
import { Modal } from "@/shared/ui/Modal"
import { RequestForm } from "./RequestForm"
import {
  $modalConsultation,
  closeModalConsultation,
  openModalConsultation,
} from "@/shared/context/modal"
import { useUnit } from "effector-react"
import { ReactNode } from "react"

interface Props  {
  children: ReactNode
}

const RequestForConsultation = (props: Props) => {
  const { children } = props
  const showModal = useUnit($modalConsultation)

  return (
    <>
      {children}
      {/* <Button
        className="text-base"
        variant="secondary"
        onClick={() => openModalConsultation()}
      >
        Узнать стоимость
      </Button> */}

      <Modal open={showModal} onClose={closeModalConsultation}>
        <RequestForm />
      </Modal>
    </>
  )
}

export { RequestForConsultation }
