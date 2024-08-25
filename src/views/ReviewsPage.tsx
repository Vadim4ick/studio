"use client"

import { SlickSlider } from "@/shared/ui/Slider"
import { useMotionValue, motion } from "framer-motion"
import { MouseEvent } from "react"

const ReviewsPage = () => {
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

  return (
    <main
      className={
        "relative mx-auto max-w-[1280px] px-4 max-desktop:pt-headerMobile"
      }
    >
      <section className="relative py-10 sm:py-10 md:py-16 lg:py-24">
        <h2 className="text mb-[60px] text-lg font-extrabold md:text-2xl lg:text-4xl">
          Избранные <span className="text-primary-500">проекты</span>
        </h2>

        <SlickSlider>
          <div className="mx-auto flex max-w-[1100px] flex-col gap-2">
            <p>
              Fortezzo{" "}
              <span className="text-primary-400">Алмазное оборудование</span>
            </p>
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={() => {
                rotateX.set(0)
                rotateY.set(0)
              }}
              style={{
                perspective: 1000,
              }}
              className="relative h-[500px] max-mobile:h-[300px]"
            >
              <motion.img
                style={{
                  rotateX: rotateX,
                  rotateY: rotateY,
                  transformStyle: "preserve-3d",
                }}
                src="/image/portf-proj.png"
                alt="1"
                className="object-contain"
              />
            </motion.div>
          </div>

          <div className="mx-auto flex max-w-[1100px] flex-col gap-2">
            <p>
              Fortezzo{" "}
              <span className="text-primary-400">Алмазное оборудование</span>
            </p>
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={() => {
                rotateX.set(0)
                rotateY.set(0)
              }}
              style={{
                perspective: 1000,
              }}
              className="relative h-[500px] max-mobile:h-[300px]"
            >
              <motion.img
                style={{
                  rotateX: rotateX,
                  rotateY: rotateY,
                  transformStyle: "preserve-3d",
                }}
                src="/image/portf-proj.png"
                alt="1"
                className="object-contain"
              />
            </motion.div>
          </div>

          <div className="mx-auto flex max-w-[1100px] flex-col gap-2">
            <p>
              Fortezzo{" "}
              <span className="text-primary-400">Алмазное оборудование</span>
            </p>
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={() => {
                rotateX.set(0)
                rotateY.set(0)
              }}
              style={{
                perspective: 1000,
              }}
              className="relative h-[500px] max-mobile:h-[300px]"
            >
              <motion.img
                style={{
                  rotateX: rotateX,
                  rotateY: rotateY,
                  transformStyle: "preserve-3d",
                }}
                src="/image/portf-proj.png"
                alt="1"
                className="object-contain"
              />
            </motion.div>
          </div>
        </SlickSlider>
      </section>
    </main>
  )
}

export { ReviewsPage }
