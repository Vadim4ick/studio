/* eslint-disable @typescript-eslint/no-explicit-any */
import Slider, { Settings } from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { ReactNode } from "react"

function SampleNextArrow(props: any) {
  const { onClick } = props
  return (
    <div
      style={{ boxShadow: "0px 4px 25px 0px #00000080" }}
      onClick={onClick}
      className="max-bigDesktop:left-0 absolute -left-[55px] bottom-[-50px] z-10 flex size-[50px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-primary-400 mobile:top-1/2"
    >
      <svg
        width="14"
        height="16"
        viewBox="0 0 14 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.52124 7.85916L13.4508 0.394268L13.4508 15.3241L0.52124 7.85916Z"
          fill="white"
        />
      </svg>
    </div>
  )
}

function SamplePrevArrow(props: any) {
  const { onClick } = props
  return (
    <div
      onClick={onClick}
      style={{ boxShadow: "0px 4px 25px 0px #00000080" }}
      className="max-bigDesktop:right-0 :bottom-[50px] absolute -right-[55px] z-10 flex size-[50px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-primary-400 mobile:top-1/2"
    >
      <svg
        width="14"
        height="16"
        viewBox="0 0 14 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.479 8.14084L0.549426 15.6057V0.675941L13.479 8.14084Z"
          fill="white"
        />
      </svg>
    </div>
  )
}

const settings: Settings = {
  //   dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SamplePrevArrow />,
  prevArrow: <SampleNextArrow />,
}

const SlickSlider = ({ children }: { children: ReactNode }) => (
  <Slider {...settings}>{children}</Slider>
)

export { SlickSlider }
