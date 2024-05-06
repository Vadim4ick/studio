"use client";

import { useGetBanner } from "@/entities/Banner";
import { PrimaryButton } from "@/shared/ui/button";
import Image from "next/image";

const HomePage = () => {
  const { data, isLoading } = useGetBanner();

  console.log(data);

  return (
    // <main className="flex min-h-screen flex-col items-center justify-between ">
    //   {isLoading && <div>loading...</div>}
    //   {!isLoading && data && data.banner.length > 0 && data.banner[0].title}
    <section className=" min-h-screen w-full ">
      <div className="z-10 mx-auto max-w-7xl py-14 text-center">
        <div className="flex max-w-2xl flex-col gap-8 px-2">
          <h1 className="text-3xl font-semibold">
            Цифровая экспертиза на благо Вашего бизнеса
          </h1>
          <p className="text-lg text-gray-700 ">
            Разработка современных, быстрых и удобных WEB приложений что-бы ваши
            клиенты были счестливы.
          </p>
          <div className="mt-4 flex justify-center gap-8 font-semibold">
            <PrimaryButton text="Узнать стоимость" />
          </div>
        </div>
      </div>
      <div className="">
        <Image
          priority
          width={300}
          height={300}
          src="/banner-image-1.png"
          alt="bunner image"
          className="pointer-events-none mx-auto select-none"
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
    // </main>
  );
};

export { HomePage };
