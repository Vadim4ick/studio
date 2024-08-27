import { useScroll, motion, useSpring, useInView } from "framer-motion"
import Image from "next/image"
import { useEffect, useRef } from "react"
import { Element, Link } from "react-scroll"
import { stages } from "../model/mockData"
import { StagesLine } from "./StagesLine"
import { calcStagesNumber } from "@/shared/helpers/calc-stages-number.helper"
import { useMedia } from "@/shared/hooks/useMedia.hooks"

const StagesItems = () => {
  const ref = useRef<null | HTMLDivElement>(null)
  const refSpring = useRef<null | HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })

  const isDesktop1024 = useMedia({ media: "max", number: 1024 })
  const isDesktop1151 = useMedia({ media: "max", number: 1151 })
  const isMobile768 = useMedia({ media: "max", number: 768 })

  const springPaddingTop = useSpring(0, {
    stiffness: 300,
    damping: 20,
  })

  const isInView = useInView(refSpring, {
    margin: "0px 100px -500px 0px",
  })

  useEffect(() => {
    if (isInView) {
      springPaddingTop.set(100)
    } else {
      springPaddingTop.set(0)
    }
  }, [isInView, springPaddingTop])

  return (
    <div className="flex" ref={ref}>
      {!isMobile768.matches && (
        <motion.div
          style={{ paddingTop: springPaddingTop }}
          className="sticky-element sticky top-0 flex h-full w-[40%]"
        >
          {/* LINE */}
          {!isDesktop1024.matches && (
            <StagesLine scrollYProgress={scrollYProgress} />
          )}

          <div className="text flex flex-col gap-[42px] max-laptop:mr-4 laptop:pl-10">
            {stages.map((item) => (
              <div key={item.id}>
                <Link
                  to={`section${item.id}`}
                  smooth={true}
                  duration={500}
                  offset={isDesktop1151.matches ? -100 : 0}
                >
                  <p className="cursor-pointer text-lg">{`${calcStagesNumber(item.id)}. ${item.title}`}</p>
                </Link>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      <div
        ref={refSpring}
        className="flex w-[60%] flex-col gap-[55px] max-mobile:w-full max-mobile:gap-11"
      >
        {stages.map((item) => (
          <Element name={`section${item.id}`} key={item.id}>
            <div
              style={{ boxShadow: "0px 10px 60px 0px #2A236726" }}
              className="rounded-[10px] bg-white px-[43px] py-[23px] max-mobile:px-4"
            >
              <div className="flex items-center gap-[50px] border-b pb-[29px] max-mobile:gap-4">
                <div className="flex size-[53px] shrink-0 items-center justify-center rounded-full bg-hover-500 font-extrabold text-white">
                  {item.id}
                </div>

                <h3 className="text-2xl font-bold text-[#2A2367] max-mobile:text-xl">
                  {item.title}
                </h3>
              </div>

              <div className="py-[26px] text-center text-lg text-[#2A2367] max-mobile:py-4 max-mobile:text-base">
                {item.description}
              </div>

              <div className="relative h-[775px] w-full">
                <Image
                  className="object-cover"
                  src={"/1.png"}
                  alt="test"
                  fill
                />
              </div>
            </div>
          </Element>
        ))}
      </div>
    </div>
  )
}

export { StagesItems }
