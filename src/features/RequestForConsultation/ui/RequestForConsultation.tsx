import { Button } from "@/shared/ui/Button"
import { Modal } from "@/shared/ui/Modal"
import { RequestForm } from "./RequestForm"
import {
  $modalConsultation,
  closeModalConsultation,
  openModalConsultation,
} from "@/shared/context/modal"
import { useUnit } from "effector-react"

const RequestForConsultation = () => {
  const showModal = useUnit($modalConsultation)

  return (
    <>
      <Button
        className="text-xs"
        variant="secondary"
        onClick={() => openModalConsultation()}
      >
        Узнать стоимость
      </Button>

      <Modal open={showModal} onClose={closeModalConsultation}>
        <RequestForm />
      </Modal>
    </>
  )
}

export { RequestForConsultation }
