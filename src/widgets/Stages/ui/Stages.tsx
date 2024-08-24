import { StagesItems } from "@/entities/Stages"

const Stages = () => (
  <section className="m-auto max-w-[1260px] px-4 pb-20">
    <h2 className="text pb-[55px] text-4xl font-extrabold max-mobile:pb-[35px]">
      Этапы
    </h2>

    <StagesItems />
  </section>
)

export { Stages }
