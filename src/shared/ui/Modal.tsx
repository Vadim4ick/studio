import clsx from "clsx"
import type { ReactNode } from "react"
import { useCallback, useEffect, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"

interface ModalProps {
  className?: string
  children: ReactNode
  open: boolean
  onClose: () => void
  close?: ReactNode
}

const Modal = (props: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const { open, children, className, onClose, close } = props

  const handleClose = useCallback(() => {
    onClose()
  }, [onClose])

  const handleOutsideClick = useCallback(
    (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        handleClose()
      }
    },
    [handleClose],
  )

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleOutsideClick)
    } else {
      document.removeEventListener("mousedown", handleOutsideClick)
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
    }
  }, [handleOutsideClick, open])

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, zIndex: 1000 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-70">
              <div ref={modalRef} className={clsx("", [className])}>
                {children}

                {close && (
                  <button className="w-max" onClick={handleClose}>
                    {close}
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export { Modal, type ModalProps }
