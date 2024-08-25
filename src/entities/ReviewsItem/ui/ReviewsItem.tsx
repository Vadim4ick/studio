import { ReactNode } from "react"
import { useMotionValue, motion, animate } from "framer-motion"
import { MouseEvent } from "react"

interface ReviewsItemProps {
  title: ReactNode
  imageUrl: string
}

const ReviewsItem = (props: ReviewsItemProps) => {
  const { imageUrl, title } = props

  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  const clamp = (value: number, min: number, max: number) =>
    Math.max(min, Math.min(value, max))

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = event
    const { width, height, left, top } = currentTarget.getBoundingClientRect()

    // Calculate the mouse position relative to the center of the element
    const x = clientX - left - width / 2
    const y = clientY - top - height / 2

    // Calculate rotateX and rotateY with clamping between -15 and 15 degrees
    const newRotateX = clamp((-y / height) * 30, -15, 15)
    const newRotateY = clamp((x / width) * 30, -15, 15)

    // Update rotateX and rotateY
    rotateX.set(newRotateX)
    rotateY.set(newRotateY)
  }

  const handleMouseLeave = () => {
    animate(rotateX, 0, { duration: 0.5 })
    animate(rotateY, 0, { duration: 0.5 })
  }

  return (
    <div className="mx-auto flex max-w-[1100px] flex-col gap-2">
      {title}

      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: 1000,
        }}
        className="relative"
      >
        <motion.img
          style={{
            rotateX: rotateX,
            rotateY: rotateY,
            transformStyle: "preserve-3d",
          }}
          src={imageUrl}
          alt="1"
          className="object-contain"
        />
      </motion.div>
    </div>
  )
}

export { ReviewsItem }
