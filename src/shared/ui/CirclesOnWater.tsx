/* eslint-disable prettier/prettier */
import clsx from "clsx"
import { motion } from "framer-motion"

const CirclesOnWater = ({ className }: { className?: string }) => (
  <div className={clsx(`relative h-full`, [className])}>
    <motion.div
      initial={{ scale: 1, opacity: 1, translate: "-50%" }}
      animate={{ scale: 1.5, opacity: 0.3 }}
      transition={{
        duration: 2.5,
        ease: "easeInOut",
        repeat: Infinity,
      }}
      className="absolute left-1/2 top-1/2 size-40 animate-pulse rounded-full border-8 border-secondary-300 shadow-lg"
    />
    <motion.div
      initial={{
        scale: 1,
        opacity: 1,
        translate: "-50%",
        marginTop: "32px",
      }}
      animate={{ scale: 1.5, opacity: 0.3 }}
      transition={{
        duration: 2.5,
        ease: "easeInOut",
        repeat: Infinity,
      }}
      className="absolute left-1/2 top-1/2 size-24 animate-pulse rounded-full border-8 border-hover-400 shadow-lg"
    />
    <motion.div
      initial={{
        scale: 1,
        opacity: 1,
        translate: "-50%",
        marginTop: "60px",
      }}
      animate={{ scale: 1.5, opacity: 0.3 }}
      transition={{
        duration: 2.5,
        ease: "easeInOut",
        repeat: Infinity,
      }}
      className="absolute left-1/2 top-1/2 size-10 animate-pulse rounded-full border-8 border-primary-500 shadow-lg"
    />
  </div>
)

export { CirclesOnWater }
