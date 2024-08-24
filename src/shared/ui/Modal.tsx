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
          <>
            <motion.div
              ref={modalRef}
              className="z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className={clsx("", [className])}>
                  {children}

                  {close && (
                    <button className="w-max" onClick={handleClose}>
                      {close}
                    </button>
                  )}
                </div>
              </div>
            </motion.div>

            <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/20 bg-opacity-70" />
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export { Modal, type ModalProps }
