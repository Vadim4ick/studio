import { motion } from "framer-motion"

const Overlay = () => (
  <motion.div
    initial={{
      opacity: 0,
      scale: 0.5,
      rotate: 180,
    }}
    animate={{
      opacity: 1,
      scale: 1,
      rotate: 0,
    }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className="fixed inset-0 bg-white"
  />
)

export { Overlay }
