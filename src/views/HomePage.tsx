import { Button } from "@/shared/ui/Button";
import { BenefitsList } from "@/widgets/BenefitsList";
import Image from "next/image";

const HomePage = () => (
  <main className={"max-desktop:pt-headerMobile"}>
    <section className="mx-auto max-w-7xl px-4 py-10 sm:flex sm:items-center sm:py-10 md:py-16 lg:py-24">
      <div className="mx-auto mb-8 max-w-7xl text-center sm:w-1/2">
        <div className="flex max-w-2xl flex-col gap-2 px-2">
          <h1 className="text-lg font-semibold md:mb-5 md:text-2xl lg:mb-8 lg:text-4xl">
            Цифровая экспертиза на благо Вашего бизнеса
          </h1>
          <p className="lg:bm-28 text-xs text-gray-700 md:mb-5 lg:text-base">
            Разработка современных, быстрых и удобных WEB приложений что-бы ваши
            клиенты были счестливы.
          </p>
          <div className="mt-4 flex justify-center gap-8 font-semibold">
            <Button className="text-xs" variant="secondary">
              Узнать стоимость
            </Button>
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-5/6 flex-col justify-items-center sm:w-1/2">
        <Image
          quality={100}
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          src="/banner-image-1.png"
          alt="bunner image"
          className="pointer-events-none mx-auto h-full w-full select-none object-cover"
          width={2000}
          height={2000}
        />
      </div>
    </section>
    <section className="">
      <BenefitsList />
    </section>
  </main>
);

export { HomePage };
