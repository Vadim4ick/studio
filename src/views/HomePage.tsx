"use client"

import { benefits } from "@/entities/BenefitItem"
import { BenefitsList } from "@/widgets/BenefitsList"
import { Stages } from "@/widgets/Stages"
import Image from "next/image"
import { WhatYouGet } from "@/widgets/WhatYouGet"
import { BtnOpenConsultation } from "@/features/BtnOpenConsultation"
import { CirclesOnWater } from "@/shared/ui/CirclesOnWater"
import { Button } from "@/shared/ui/Button"
import Link from "next/link"

const HomePage = () => (
  <main className={" px-4 pt-20"}>
    <section className="mx-auto max-w-[1280px] sm:flex sm:items-center md:py-10">
      <div className=" mx-auto mb-8 contents max-w-7xl text-center sm:w-1/2">
        <div className="flex max-w-2xl flex-col gap-8  px-2">
          <h1 className="text text-lg font-extrabold md:text-xl lg:text-2xl">
            Профессиональное Создание и Продвижение Сайтов от Барбарис
          </h1>
          <article className="text text-gray-700 text-base">
            Веб-студия Barbaris предлагает полный спектр услуг по созданию
            сайтов любой сложности. Наша команда профессионалов готова взяться
            за проекты различной направленности: от личных блогов до крупных
            интернет-магазинов и корпоративных порталов.
          </article>
          <div className="flex justify-center gap-8 font-semibold">
            {/* <BtnOpenConsultation /> */}
            <Link href={"/price/"} className="btn-primary">
              <Button variant="secondary">Узнать стоимость</Button>
            </Link>
          </div>
        </div>
        <div className="mx-auto flex w-5/6 flex-col justify-items-center sm:w-1/2">
          <Image
            quality={100}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            src="/image/banner-image-1.png"
            alt="bunner image"
            className="pointer-events-none mx-auto h-full w-full select-none object-cover"
            width={2000}
            height={2000}
          />
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-[1280px] py-10">
      <h2 className="text mb-[25px] text-center text-lg font-extrabold md:mb-7 md:text-left  md:text-2xl lg:mb-10 lg:text-4xl">
        Заказать Интернет Магазин:{" "}
        <span className="text-primary-500">
          Профессиональное Создание от Barbaris
        </span>
      </h2>

      <p className="text mb-[30px] text-center text-base font-extrabold md:mb-6 md:text-left md:text-xl lg:mb-8">
        Наши ключевые услуги включают
      </p>
      <BenefitsList
        benefitsData={benefits}
        className="mb-[50px] grid grid-cols-1 justify-items-center gap-y-10 md:grid-cols-2 md:gap-x-5 lg:grid-cols-3 lg:gap-y-[54px]"
      />
      <div className="mt-4 flex justify-center gap-8 font-semibold">
        <BtnOpenConsultation />
      </div>
    </section>

    <WhatYouGet />

    <section className="mx-auto max-w-[1280px] pb-10 lg:pb-24">
      <h2 className="text mb-[60px] text-center text-lg font-extrabold md:text-2xl lg:text-4xl">
        Сколько Стоит Создание Сайта?{" "}
        <span className="text-primary-500">Прайс-лист Веб-Студии Barbaris</span>
      </h2>

      <div className="flex items-start gap-3">
        <div className="text flex flex-col gap-4 tablet:basis-1/2">
          <p>
            Стоимость разработки сайта варьируется в зависимости от сложности
            проекта и требуемых функциональностей. Мы предлагаем прозрачные
            условия сотрудничества и готовы предоставить детальный расчет
            стоимости перед началом работ.
          </p>

          <p>
            Подробнее с ценами работ вы можете ознакомится на странице -{" "}
            <Link className="text-primary-500" href={"/price"}>
              цены
            </Link>
          </p>
        </div>

        <div className="basis-1/2 max-tablet:hidden">
          <div className="flex items-center justify-center">
            <CirclesOnWater />
          </div>
        </div>
      </div>
    </section>

    <Stages />
  </main>
)

export { HomePage }
