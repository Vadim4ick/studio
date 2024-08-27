"use client"

import { IReviewsItem } from "@/shared/const/mockProjects.const"
import Slider, { Settings } from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Image from "next/image"
import { useRef } from "react"
import { Arrow } from "@/shared/icons/Arrow"

const settings: Settings = {
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
}
const ReviewsProjectItem = ({ item }: { item: IReviewsItem }) => {
  const sliderRef = useRef<Slider>(null)

  return (
    <section className="py-20">
      <div className="flex flex-col gap-y-5">
        <h1 className="text text-center text-4xl font-semibold">
          {item.title}
        </h1>

        <h2 className="text text-center text-2xl font-medium">
          {item.subTitle}
        </h2>
      </div>

      <div className="pb-6">
        <Slider ref={sliderRef} {...settings} className="pt-12">
          {item.images.map((image, idx) => (
            <div key={idx} className="relative h-[700px] w-full">
              <Image
                fill
                className="rounded-md object-cover"
                src={image}
                alt="image"
              />
            </div>
          ))}
        </Slider>

        <div className="flex justify-between pt-6">
          <button
            className="flex size-12 items-center justify-center rounded-full bg-primary-950 transition-colors hover:bg-hover-400"
            onClick={() => sliderRef.current?.slickPrev()}
          >
            <Arrow className="rotate-90 cursor-pointer text-white" />
          </button>
          <button
            className="flex size-12 items-center justify-center rounded-full bg-primary-950 transition-colors hover:bg-hover-400"
            onClick={() => sliderRef.current?.slickNext()}
          >
            <Arrow className="-rotate-90 cursor-pointer text-white" />
          </button>
        </div>
      </div>

      <p className="text text-lg font-medium">{item.aboutProject}</p>
    </section>
  )
}

export { ReviewsProjectItem }
