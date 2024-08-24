"use client"

import {
  $modalConsultation,
  closeModalConsultation,
} from "@/shared/context/modal"
import { Modal } from "@/shared/ui/Modal"
import { useUnit } from "effector-react"
import { RequestForm } from "./RequestForm"

const ModalRequest = () => {
  const showModal = useUnit($modalConsultation)

  return (
    <Modal
      className="w-full max-w-[500px] px-5"
      open={showModal}
      onClose={closeModalConsultation}
    >
      <RequestForm />
    </Modal>
  )
}

export { ModalRequest }
