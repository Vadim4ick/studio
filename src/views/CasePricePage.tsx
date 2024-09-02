/* eslint-disable @next/next/no-img-element */

import { BtnOpenConsultation } from "@/features/BtnOpenConsultation"
import { CasesPrice } from "@/widgets/CasesPrice"

const CasePricePage = () => (
  <main className={"mx-auto max-w-[1160px] px-4 max-desktop:pt-headerMobile"}>
    <section className="relative mb-40 rounded-3xl bg-[#818cf8] px-9 py-[50px] lg:mt-20">
      <h2 className="text mb-[60px] text-lg font-extrabold md:text-2xl lg:text-4xl">
        Цены <span className="text-hover-400">на разработку сайтов сайтов</span>
      </h2>
      <img
        src="/image/price-bg.png"
        alt=""
        className="absolute left-0 top-0 w-full"
      />

      <article className="relative z-10 mb-10 flex max-w-[600px] flex-col gap-2 text-lg text-white">
        <p>
          Наше преимущество перед конкурентами заключается в высоком качестве
          услуг и доступных ценах на создание сайтов с использованием
          современного стека Html, CSS, JavaScript, React, Next JS, Node js.
        </p>

        <p>
          Мы предоставляем гибкие решения, которые подходят для клиентов с
          различными бюджетами и бизнес-задачами, а также учитывают их
          требования к будущему веб-ресурсу.
        </p>
      </article>
      <CasesPrice />
      <article className="flex flex-col gap-2 py-5 text-lg text-white">
        <p>
          Чтобы определить стоимость создания сайта, сначала нужно понять, какой
          тип ресурса вам необходим и на основе какого проекта он будет
          разрабатываться. Естественно, что одностраничный сайт на WordPress
          будет стоить меньше, чем интернет-магазин или портал разработанный на
          Next JS. Цена разработки сайта также зависит от того, будет ли проект
          стандартным или индивидуальным.
        </p>
        <p>
          Решения, созданные специально для вашего бизнеса, обходятся дороже, но
          в будущем они требуют минимальных изменений, так как изначально
          учитывают все ваши потребности.
        </p>
      </article>
    </section>
  </main>
)

export { CasePricePage }
