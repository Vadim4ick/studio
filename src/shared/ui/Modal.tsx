import type { ReactNode } from "react"
import { useCallback, useEffect, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { cn } from "../helpers/cn.helper"

interface ModalProps {
  className?: string
  children: ReactNode
  open: boolean
  onClose: () => void
  close?: ReactNode
}

const Modal = (props: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const { open, children, className = "", onClose, close } = props

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
      document.body.style.overflow = "hidden"
    } else {
      document.removeEventListener("mousedown", handleOutsideClick)
      document.body.style.overflow = "auto"
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick)
      document.body.style.overflow = "auto"
    }
  }, [handleOutsideClick, open])

  return (
    <>
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="relative z-50"
              ref={modalRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div
                className={cn(
                  "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
                  [className],
                )}
              >
                {children}

                {close && (
                  <button className="w-max" onClick={handleClose}>
                    {close}
                  </button>
                )}
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
