import { MotionValue, useTransform, motion } from "framer-motion"

const StagesLine = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>
}) => {
  const maskHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="378"
      viewBox="0 0 23 378"
      fill="currentColor"
      className="text-[#BDBDBD]"
    >
      <defs>
        <clipPath id="clip">
          <motion.rect
            x="0"
            y="0"
            width="23"
            height="378"
            fill="white"
            style={{ height: maskHeight }}
          />
        </clipPath>
      </defs>

      {/* Базовая серая линия */}
      <motion.line
        x1="11.5"
        y1="9"
        x2="11.5"
        y2="378"
        strokeWidth="5"
        stroke="#BDBDBD"
      />

      {/* Фиолетовая линия, которая будет окрашиваться */}
      <motion.line
        x1="11.5"
        y1="9"
        x2="11.5"
        y2="378"
        strokeWidth="5"
        stroke="#7F3FBF"
        clipPath="url(#clip)"
      />

      {/* Серые круги */}
      <circle cx="11.5" cy="82.5" r="11.5" fill="#BDBDBD" />
      <circle cx="11.5" cy="153.5" r="11.5" fill="#BDBDBD" />
      <circle cx="11.5" cy="224.5" r="11.5" fill="#BDBDBD" />
      <circle cx="11.5" cy="295.5" r="11.5" fill="#BDBDBD" />
      <circle cx="11.5" cy="366.5" r="11.5" fill="#BDBDBD" />
      <circle cx="11.5" cy="11.5" r="11.5" fill="#BDBDBD" />

      {/* Фиолетовые круги, которые будут окрашиваться */}
      <motion.circle
        cx="11.5"
        cy="82.5"
        r="11.5"
        fill="#7F3FBF"
        clipPath="url(#clip)"
      />
      <motion.circle
        cx="11.5"
        cy="153.5"
        r="11.5"
        fill="#7F3FBF"
        clipPath="url(#clip)"
      />
      <motion.circle
        cx="11.5"
        cy="224.5"
        r="11.5"
        fill="#7F3FBF"
        clipPath="url(#clip)"
      />
      <motion.circle
        cx="11.5"
        cy="295.5"
        r="11.5"
        fill="#7F3FBF"
        clipPath="url(#clip)"
      />
      <motion.circle
        cx="11.5"
        cy="366.5"
        r="11.5"
        fill="#7F3FBF"
        clipPath="url(#clip)"
      />
      <motion.circle
        cx="11.5"
        cy="11.5"
        r="11.5"
        fill="#7F3FBF"
        clipPath="url(#clip)"
      />
    </svg>
  )
}

export { StagesLine }
