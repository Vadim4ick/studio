import { StagesItems } from "@/entities/Stages"

const Stages = () => (
  <section className="m-auto max-w-[1280px] px-4 py-32">
    <h3 className="text mb-[60px] text-lg font-extrabold md:text-2xl lg:text-4xl">
      Барбарис: Создание Одностраничного Сайта -{" "}
      <span className="text-primary-500">Лендинг</span>
    </h3>
    <StagesItems />
  </section>
)

export { Stages }
