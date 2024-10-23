import { useScroll, motion, useSpring, useInView } from "framer-motion"
import Image from "next/image"
import { useEffect, useRef } from "react"
import { Element } from "react-scroll"
import { stages } from "../model/mockData"
import { StagesLine } from "./StagesLine"
import { useMedia } from "@/shared/hooks/useMedia.hooks"

const StagesItems = () => {
  const ref = useRef<null | HTMLDivElement>(null)
  const refSpring = useRef<null | HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start +400px", "end end"],
  })

  const isDesktop1024 = useMedia({ media: "max", number: 1024 })
  // const isDesktop1151 = useMedia({ media: "max", number: 1151 })
  // const isMobile768 = useMedia({ media: "max", number: 768 })

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
    <div className="flex gap-3" ref={ref}>
      {!isDesktop1024.matches && (
        <motion.div
          style={{ paddingTop: springPaddingTop }}
          className="sticky-element sticky top-10 grid h-full overflow-hidden laptop:shrink-0 laptop:flex-grow-0 laptop:basis-auto laptop:grid-cols-[23px_1fr] laptop:gap-10"
        >
          {/* LINE */}
          {!isDesktop1024.matches && (
            <StagesLine scrollYProgress={scrollYProgress} />
          )}

          {/* <div className="text flex flex-col gap-[42.5px] max-laptop:mr-4">
            {stages.map((item) => (
              <div key={item.id} className="">
                <Link
                  to={`section${item.id}`}
                  smooth={true}
                  duration={500}
                  offset={-110}
                >
                  <p className=" cursor-pointer overflow-hidden text-ellipsis whitespace-nowrap text-pretty text-xs">{`${calcStagesNumber(item.id)}. ${item.title}`}</p>
                </Link>
              </div>
            ))}
          </div> */}
        </motion.div>
      )}

      <div
        ref={refSpring}
        className="flex flex-col gap-[55px] max-laptop:w-full max-mobile:gap-11"
      >
        {stages.map((item) => (
          <Element name={`section${item.id}`} key={item.id}>
            <div
              style={{ boxShadow: "0px 10px 60px 0px #2A236726" }}
              className="w-full rounded-[10px] bg-white px-[43px] py-[23px] duration-500 hover:bg-hover-300 dark:bg-primary-50/5 dark:hover:bg-hover-600 max-laptop:mx-auto max-mobile:px-4"
            >
              <div className="flex items-center gap-[50px] border-b pb-[29px] dark:border-cardBorderBottom max-mobile:gap-4">
                <div className="flex size-[53px] shrink-0 items-center justify-center rounded-full text-[48px]  font-extrabold text-gray/90 drop-shadow-lg dark:text-white/50">
                  0{item.id}
                </div>

                <h3 className="text-2xl font-bold text-[#2A2367] text-gray/90 dark:text-white/50 max-mobile:text-xl">
                  {item.title}
                </h3>
              </div>

              <div className="grid py-3 md:grid-cols-3">
                <div className="text px-5 py-[26px] text-primary-950 max-mobile:py-4 max-mobile:text-sm md:col-span-2">
                  {item.description}
                </div>

                <div className="relative h-full min-h-[230px] w-full">
                  <Image
                    className="rounded-lg object-cover"
                    src={item.imageUrl}
                    alt="test"
                    fill
                  />
                </div>
              </div>
            </div>
          </Element>
        ))}
      </div>
    </div>
  )
}

export { StagesItems }
