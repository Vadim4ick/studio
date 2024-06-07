import { Button } from "@/shared/ui/Button"
import { Modal } from "@/shared/ui/Modal"
import { useState } from "react"
import { RequestForm } from "./RequestForm"

const ModalWrapper = () => {
  const [showModal, setShowModal] = useState(false)

  const handleClick = () => {
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <>
      <Button className="text-xs" variant="secondary" onClick={handleClick}>
        Узнать стоимость
      </Button>
      <Modal open={showModal} onClose={handleClose}>
        <RequestForm />
      </Modal>
    </>
  )
}

export { ModalWrapper }
