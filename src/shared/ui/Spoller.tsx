import { ReactNode } from "react"
import { Variants, motion } from "framer-motion"

interface Props {
  children: ReactNode
  isOpen: boolean
}

const variants: Variants = {
  closed: { opacity: 0, height: 0 },

  open: { opacity: 1, height: "auto" },
}

const Spoller = (props: Props) => {
  const { children, isOpen } = props

  return (
    <motion.div
      transition={{ duration: 0.5 }}
      variants={variants}
      initial={"closed"}
      animate={isOpen ? "open" : "closed"}
      style={{ overflow: "hidden" }}
    >
      {children}
    </motion.div>
  )
}

export { Spoller }
