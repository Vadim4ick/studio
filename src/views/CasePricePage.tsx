/* eslint-disable @next/next/no-img-element */

import { CasesPrice } from "@/widgets/CasesPrice"
import Link from "next/link"

const CasePricePage = () => (
  <main
    className={"mx-auto max-w-[1160px] px-4 pt-20 max-desktop:pt-headerMobile"}
  >
    <h1 className="text mb-16 text-center text-lg font-extrabold md:text-2xl lg:text-4xl">
      Цены <span className="text-hover-400">на создание сайта </span>
      от компании Barbaris
    </h1>
    <article className="relative mb-40 rounded-3xl bg-[#818cf8] px-9 py-[50px] ">
      <img
        src="/image/price-bg.png"
        alt=""
        className="absolute left-0 top-0 w-full"
      />

      <div className="relative z-10 mb-10 flex max-w-[600px] flex-col gap-2 text-white">
        <p>
          Чтобы определить стоимость создания сайта, сначала нужно понять, какой
          тип ресурса вам вам больше одходит. Логично, что одностраничный сайт
          на WordPress будет стоить меньше, чем интернет-магазин или
          корпоративный портал разработанный на JS фреймво́рке.
        </p>
      </div>
      <div className="relative z-10 mb-10 flex flex-col gap-1 text-white">
        <h2 className="text mb-6 text-lg font-extrabold md:text-xl lg:text-2xl">
          Веб-разработка и стоимость создания сайта
        </h2>

        <p className="text-pretty">
          Создание сайта — это сложный процесс, включающий в себя множество
          этапов, от проектирования до запуска и поддержки. Стоимость создания
          сайта зависит от множества факторов, таких как сложность проекта,
          функциональность, объем контента и необходимость в дополнительных
          услугах.
        </p>

        <p className="text-pretty">
          Мы предлагаем гибкие тарифные планы, чтобы каждый клиент мог выбрать
          оптимальное решение в рамках своего бюджета на сайт.
        </p>

        <p className="text-pretty">
          Ознакомится с проектами наших клиентов можно в разделе -{" "}
          <Link href={"/reviews"} className="font-semibold text-[#000]">
            кейсы
          </Link>
        </p>
      </div>

      <CasesPrice />
    </article>
  </main>
)

export { CasePricePage }
