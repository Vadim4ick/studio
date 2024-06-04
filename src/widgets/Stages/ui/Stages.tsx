import { StagesItems } from "@/entities/Stages"

const Stages = () => (
  <section className="m-auto max-w-[1260px] px-4">
    <h2 className="pb-[55px] text-4xl font-extrabold text-[#2A2367] max-mobile:pb-[35px]">
      Этапы
    </h2>

    <StagesItems />
  </section>
)

export { Stages }
