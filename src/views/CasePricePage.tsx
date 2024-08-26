/* eslint-disable @next/next/no-img-element */

import { CasesPrice } from "@/widgets/CasesPrice"

const CasePricePage = () => (
  <main className={"mx-auto max-w-[1160px] px-4 max-desktop:pt-headerMobile"}>
    <section className="relative mb-40 mt-20 rounded-3xl bg-[#818cf8] px-9 py-[50px]">
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

      <CasesPrice />
    </section>
  </main>
)

export { CasePricePage }
