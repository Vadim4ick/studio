"use client"

import { SlickSlider } from "@/shared/ui/Slider"
import Image from "next/image"

const ReviewsPage = () => (
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

          <div className="relative h-[500px] max-mobile:h-[300px]">
            <Image
              src="/image/portf-proj.png"
              alt="1"
              fill
              objectFit="contain"
            />
          </div>
        </div>
        <div className="mx-auto flex max-w-[1100px] flex-col gap-2">
          <p>
            Fortezzo{" "}
            <span className="text-primary-400">Алмазное оборудование</span>
          </p>

          <div className="relative h-[500px] max-mobile:h-[300px]">
            <Image
              src="/image/portf-proj.png"
              alt="1"
              fill
              objectFit="contain"
            />
          </div>
        </div>
        <div className="mx-auto flex max-w-[1100px] flex-col gap-2">
          <p>
            Fortezzo{" "}
            <span className="text-primary-400">Алмазное оборудование</span>
          </p>

          <div className="relative h-[500px] max-mobile:h-[300px]">
            <Image
              src="/image/portf-proj.png"
              alt="1"
              fill
              objectFit="contain"
            />
          </div>
        </div>
      </SlickSlider>
    </section>
  </main>
)

export { ReviewsPage }
