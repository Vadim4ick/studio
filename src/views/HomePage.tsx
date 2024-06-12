"use client"

import { benefits } from "@/entities/BenefitItem"
import { BenefitsList } from "@/widgets/BenefitsList"
import { RequestForConsultation } from "@/features/RequestForConsultation"
import { Stages } from "@/widgets/Stages"
import Image from "next/image"
import { motion } from "framer-motion"
import { WhatYouGet } from "@/widgets/WhatYouGet"

const HomePage = () => (
  <main className={"mx-auto max-w-[1160px] px-4 max-desktop:pt-headerMobile"}>
    <section className="py-10 sm:flex sm:items-center sm:py-10 md:py-16 lg:py-24">
      <div className="mx-auto mb-8 max-w-7xl text-center sm:w-1/2">
        <div className="flex max-w-2xl flex-col gap-2 px-2">
          <h1 className="text text-lg font-semibold md:mb-5 md:text-2xl lg:mb-8 lg:text-4xl">
            Цифровая экспертиза на благо Вашего бизнеса
          </h1>
          <p className="lg:bm-28 text text-gray-700 text-xs md:mb-5 lg:text-base">
            Разработка современных, быстрых и удобных WEB приложений что-бы ваши
            клиенты были счестливы.
          </p>
          <div className="mt-4 flex justify-center gap-8 font-semibold">
            <RequestForConsultation />
          </div>
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
    </section>
    <section className="py-10">
      <h2 className="text mb-[54px] text-lg font-extrabold md:mb-8 md:text-2xl lg:mb-7 lg:text-4xl">
        Мы создаем интернет-магазины,{" "}
        <span className="text-primary-500">которые продают</span>
      </h2>
      <BenefitsList
        benefitsData={benefits}
        className="mb-[50px] grid grid-cols-1 justify-items-center gap-y-10 md:grid-cols-2 md:gap-x-5 lg:grid-cols-3 lg:gap-y-[54px]"
      />
      <div className="mt-4 flex justify-center gap-8 font-semibold">
        <RequestForConsultation />
      </div>
    </section>

    

    <WhatYouGet />

    <section className="pb-10 lg:pb-24">
      <h2 className="text mb-[60px] text-lg font-extrabold md:text-2xl lg:text-4xl">
        Исследуем <span className="text-primary-500">Бизнес</span>
      </h2>

      <div className="flex items-start gap-3">
        <div className="text flex flex-col gap-4 tablet:basis-1/2">
          <p>
            Каждый клиент – своя история. Мы не берем шаблонные решения, а
            исследуем рынок конкретно под ваши цели и задачи. Сделать
            интернет-магазин с нуля непросто.
          </p>
          <p>
            Нужен сайт с качественной разработкой дизайна, который не будет
            отвлекать от сути, наполнением и рабочими модулями. Кроме этого, для
            успешного запуска электронной торговой площадки владельцу бизнеса
            требуется найти поставщиков, выбрать товарные позиции, просчитать
            рентабельность, уладить другие организационные вопросы вне сети.
          </p>
          <p>
            Создание интернет-магазина лучше делегировать на профессионалов. Мы
            возьмем на себя вопросы по разработке интернет-магазина под ключ.
            Специалисты компании предоставляют заказчику готовый продающий сайт.
            Он уже наполнен контентом, ориентирован на конечного потребителя и
            интуитивно понятен для заказчика.
          </p>
        </div>

        <div className="basis-1/2 max-tablet:hidden">
          <div className="flex items-center justify-center">
            <div className="relative">
              <motion.div
                initial={{ scale: 1, opacity: 1, translate: "-50%" }}
                animate={{ scale: 1.5, opacity: 0.3 }}
                transition={{
                  duration: 2.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                className="absolute left-1/2 top-1/2 size-80 animate-pulse rounded-full border-8 border-primary-500"
              />
              <motion.div
                initial={{
                  scale: 1,
                  opacity: 1,
                  translate: "-50%",
                  marginTop: "35px",
                }}
                animate={{ scale: 1.5, opacity: 0.3 }}
                transition={{
                  duration: 2.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                className="absolute left-1/2 top-1/2 size-60 animate-pulse rounded-full border-8 border-primary-500"
              />
              <motion.div
                initial={{
                  scale: 1,
                  opacity: 1,
                  translate: "-50%",
                  marginTop: "70px",
                }}
                animate={{ scale: 1.5, opacity: 0.3 }}
                transition={{
                  duration: 2.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
                className="absolute left-1/2 top-1/2 size-40 animate-pulse rounded-full border-8 border-primary-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <Stages />
  </main>
)

export { HomePage }
