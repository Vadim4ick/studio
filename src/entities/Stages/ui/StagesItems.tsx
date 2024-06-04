import { useScroll } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"
import { Element, Link } from "react-scroll"
import { stages } from "../model/mockData"
import { StagesLine } from "./StagesLine"
import { calcStagesNumber } from "@/shared/helpers/calc-stages-number.helper"

const StagesItems = () => {
  const ref = useRef<null | HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  })

  return (
    <div className="flex" ref={ref}>
      <div className="sticky top-0 flex h-full w-[40%] pt-6">
        {/* LINE */}
        <StagesLine scrollYProgress={scrollYProgress} />

        <div className="flex flex-col gap-[42px] pl-10">
          {stages.map((item) => (
            <div key={item.id}>
              <Link to={`section${item.id}`} smooth={true} duration={500}>
                <p className="cursor-pointer text-lg">{`${calcStagesNumber(item.id)}. ${item.title}`}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="flex w-[60%] flex-col gap-[55px]">
        {stages.map((item) => (
          <Element name={`section${item.id}`} key={item.id}>
            <div
              style={{ boxShadow: "0px 10px 60px 0px #2A236726" }}
              className="rounded-[10px] bg-white px-[43px] py-[23px]"
            >
              <div className="flex items-center gap-[50px] border-b pb-[29px]">
                <div className="flex size-[53px] items-center justify-center rounded-full bg-[#43CD93] font-extrabold text-white">
                  {item.id}
                </div>

                <h3 className="text-2xl font-bold text-[#2A2367]">
                  {item.title}
                </h3>
              </div>

              <div className="pt-[26px] text-lg text-[#2A2367]">
                {item.description}
              </div>

              <div className="relative h-[775px] w-full">
                <Image src={"/1.png"} alt="test" fill />
              </div>
            </div>
          </Element>
        ))}
      </div>
    </div>
  )
}

export { StagesItems }
