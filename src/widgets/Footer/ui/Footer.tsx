import Link from "next/link"
import Image from "next/image"
import { BtnOpenConsultation } from "@/features/BtnOpenConsultation"

const Footer = () => (
  <footer className="w-full bg-primary-950 py-20 text-white">
    <div className="mx-auto max-w-[1160px] px-4">
      <section className=" flex flex-col justify-between sm:flex-row">
        <div className="text-start">
          <h3 className="mb:[11px] text-lg font-bold sm:mb-[21px] sm:text-2xl xl:mb-[30px] xl:text-4xl">
            Напишите нам
          </h3>
          <a
            className="text-xl font-bold text-primary-200 sm:text-3xl xl:text-5xl"
            href="mailto:info@studio.examle"
          >
            info@studio.examle
          </a>
        </div>
        <hr className="border-1 my-6 border-primary-500 sm:hidden lg:my-8" />
        <BtnOpenConsultation />
      </section>
      <hr className="border-1 my-6 hidden border-primary-500 sm:block lg:my-8" />
      <section className="pt-8 sm:pt-0">
        <div className="flex flex-col-reverse items-center gap-8 sm:grid sm:grid-cols-2 sm:gap-6">
          <div className="max-w-[300px] text-sm font-bold xl:text-lg">
            <h3 className=" mb-6">
              Москва, ул. Профсоюзная 76, БЦ «ГАЛЕРЕЯ 76» 2 этаж
            </h3>
            <h3 className="">+7 (495) 792-66-69 пн-пт 10:00–19:00</h3>
          </div>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-end">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <Image
                src={"/image/telegram.svg"}
                priority
                width={35}
                height={35}
                alt="logoImage"
              />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <Image
                src={"/image/whatsapp.svg"}
                priority
                width={35}
                height={35}
                alt="logoImage"
              />
            </a>
          </div>
        </div>

        <div className=" mt-8 flex flex-col items-center gap-y-5 sm:mt-0">
          <Link href={"/"}>
            <Image
              src={"/image/logo.png"}
              priority
              width={160}
              height={55}
              alt="logoImage"
            />
          </Link>

          <p className="text-center text-xs">
            © 2024{" "}
            <a href="https://studiobarbaris.com" className="hover:underline">
              Studio Barbaris™
            </a>
            . All Rights Reserved.
          </p>
        </div>
      </section>
    </div>
  </footer>
)

export { Footer }
