/* eslint-disable @next/next/no-img-element */
import { CasePrice, casesData } from "@/entities/CasePrice"

const CasesPrice = () => (
  <section className="relative mx-auto mb-40 mt-20 max-w-[1160px] rounded-3xl bg-[#9E77ED] px-4 px-9 py-[50px]">
    <img
      src="/image/price-bg.png"
      alt=""
      className="absolute left-0 top-0 w-full"
    />

    <div className="relative z-10 mb-10 flex max-w-[600px] flex-col gap-2 text-white">
      <p>
        Итоговая стоимость разработки интернет-магазина складывается от
        требований заказчика выясненные на этапе обсуждения.
      </p>

      <p>
        При расчёте конечной стоимости учитываются сложность дизайна и
        функционала.
      </p>
    </div>

    <div className="flex h-full justify-between gap-3">
      {casesData.map((item) => (
        <CasePrice key={item.id} item={item} />
      ))}
    </div>
  </section>
)

export { CasesPrice }
