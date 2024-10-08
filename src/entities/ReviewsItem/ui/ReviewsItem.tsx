import { useMotionValue, motion, animate } from "framer-motion"
import { MouseEvent } from "react"
import { useMedia } from "@/shared/hooks/useMedia.hooks"
import Link from "next/link"
import { IReviewsItem } from "@/shared/const/mockProjects.const"

const ReviewsItem = (props: IReviewsItem) => {
  const { imageUrl, title, imageUrl2X, id } = props

  const isMobile768 = useMedia({ media: "max", number: 768 })

  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)

  const clamp = (value: number, min: number, max: number) =>
    Math.max(min, Math.min(value, max))

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = event
    const { width, height, left, top } = currentTarget.getBoundingClientRect()

    const x = clientX - left - width / 2
    const y = clientY - top - height / 2

    const newRotateX = clamp((-y / height) * 30, -15, 15)
    const newRotateY = clamp((x / width) * 30, -15, 15)

    // // Update rotateX and rotateY
    rotateX.set(newRotateX)
    rotateY.set(newRotateY)

    // Анимация обновления значений rotateX и rotateY с плавным переходом
    // animate(rotateX, newRotateX, { duration: 0.1, ease: "linear" })
    // animate(rotateY, newRotateY, { duration: 0.1, ease: "linear" })
  }

  const handleMouseLeave = () => {
    animate(rotateX, 0, { duration: 0.5 })
    animate(rotateY, 0, { duration: 0.5 })
  }

  return (
    <Link
      href={`/reviews/${id}`}
      className="mx-auto flex max-w-[1100px] flex-col gap-4"
    >
      <p className="text text-xl font-semibold">{title}</p>

      <motion.div
        onMouseMove={!isMobile768.matches ? handleMouseMove : undefined}
        onMouseLeave={!isMobile768.matches ? handleMouseLeave : undefined}
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
          srcSet={imageUrl2X ? `${imageUrl2X} 2x` : undefined}
          alt="1"
          className="object-contain"
        />
      </motion.div>
    </Link>
  )
}

export { ReviewsItem }
