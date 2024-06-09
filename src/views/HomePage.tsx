"use client"

import { benefits } from "@/entities/BenefitItem"
import { Button } from "@/shared/ui/Button"
import { BenefitsList } from "@/widgets/BenefitsList"
import { RequestForConsultation } from "@/widgets/RequestForConsultation"
import { Stages } from "@/widgets/Stages"
import Image from "next/image"

const HomePage = () => (
  <main className={"max-desktop:pt-headerMobile"}>
    <section className="mx-auto max-w-[1160px] px-4 py-10 sm:flex sm:items-center sm:py-10 md:py-16 lg:py-24">
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
    <section className="mx-auto max-w-[1160px] px-4 py-10">
      <h2 className="text mb-[54px] text-lg font-extrabold md:mb-8 md:text-2xl lg:mb-7 lg:text-4xl">
        Мы создаем интернет-магазины,{" "}
        <span className="text-primary-500">которые продают</span>{" "}
      </h2>
      <BenefitsList
        benefitsData={benefits}
        className="mb-[50px] grid grid-cols-1 justify-items-center gap-y-10 md:grid-cols-2 md:gap-x-5 lg:grid-cols-3 lg:gap-y-[54px]"
      />
      <div className="mt-4 flex justify-center gap-8 font-semibold lg:justify-start">
        <Button className="text-xs" variant="secondary">
          Узнать стоимость
        </Button>
      </div>
    </section>

    <Stages />
  </main>
)

export { HomePage }
