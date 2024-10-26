"use client"

import Link from "next/link"
import { BtnOpenConsultation } from "@/features/BtnOpenConsultation"
import { Logo } from "@/shared/icons/logo"

const Footer = () => (
  <footer className="text my-6   w-full ">
    <div className="mx-auto max-w-[1160px] border-t-2 border-primary-950 px-4 dark:border-primary-200">
      <section className=" flex flex-col justify-between py-10 sm:flex-row">
        <div className="text-start">
          <h3 className="mb:[11px] text-lg font-bold sm:mb-[21px] sm:text-2xl xl:mb-[30px] xl:text-4xl">
            Напишите нам
          </h3>
          <a
            className="text-xl font-bold text-primary-800 duration-500 hover:text-hover-500 dark:text-primary-400 dark:hover:text-hover-500 sm:text-3xl xl:text-5xl"
            href="mailto:info@studio.examle"
          />
        </div>
        <hr className="border-1 my-6 border-primary-500 sm:hidden lg:my-8" />
        <BtnOpenConsultation />
      </section>
      <hr className="border-1 my-6 hidden border-primary-950 dark:border-primary-200 sm:block lg:my-8" />
      <section className="flex flex-col gap-3 pt-8 sm:pt-0">
        <div className=" mt-8 flex flex-col items-center gap-y-5 sm:mt-0">
          <Link href={"/"}>
            <Logo />
          </Link>

          <p className="text-center text-xs">
            © 2024{"  "}
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
