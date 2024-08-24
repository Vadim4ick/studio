import React from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { Button } from "@/shared/ui/Button"
import Image from "next/image"
import { cn } from "@/shared/helpers/cn.helper"

type FormValues = {
  firstName: string
  phoneNumber: string
}

const RequestForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  const onSubmit: SubmitHandler<FormValues> = (data) =>
    console.log("data: ", data)

  return (
    <div className="w-full rounded-lg bg-white sm:w-[766px] md:mt-0">
      <div className="sm:py-17 m-auto flex w-full flex-col items-center gap-y-7 px-7 py-11 sm:max-w-[375px]">
        <h1 className="text-center text-xl font-bold leading-tight tracking-tight md:text-2xl">
          Заявка на консультацию
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full space-y-4 md:space-y-6"
          action="#"
        >
          <div>
            <label
              htmlFor="name"
              className={cn(
                "mb-1 block text-left text-base font-medium text-gray",
                { "text-hover-700": errors.firstName },
              )}
            >
              Ваше имя
            </label>
            <input
              id="name"
              className="dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full border-b-2 border-b-primary-300 p-2.5 focus:border-b-cardBorderBottom focus:bg-white dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
              type="text"
              placeholder="Иванов ..."
              {...register("firstName", { required: true, maxLength: 80 })}
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className={cn(
                "mb-1 block text-left text-base font-medium text-gray",
                { "text-hover-700": errors.phoneNumber },
              )}
            >
              Ваш телефон
            </label>
            <input
              id="phone"
              className="bg-gray-50 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 block w-full border-b-2 border-b-primary-300 p-2.5 focus:border-b-cardBorderBottom  dark:text-white dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
              type="tel"
              placeholder="+7..."
              {...register("phoneNumber", {
                required: true,
                minLength: 6,
                maxLength: 12,
              })}
            />
          </div>

          <Button variant="secondary" type="submit" className="w-full">
            Отправить
          </Button>
        </form>
        <p className="text-[10px] font-medium text-gray">
          Нажимая на кнопку «Отправить заявку», я даю согласие на обработку
          персональных данных и соглашаюсь c политикой конфиденциальности
        </p>
        <div className="relative flex h-[95px] w-[215px] justify-center rounded-[10px] bg-primary-500 align-middle">
          <Image
            src="/image/magazine.png"
            alt="magazine"
            width={122}
            height={73}
            style={{ objectFit: "contain" }}
          />
          <div className="absolute -right-2 -top-2 flex h-[27px] w-[27px] items-center justify-center rounded-full border-4 border-white bg-gray">
            <Image
              src="/image/closed_lock_icon 1.png"
              width={44}
              height={44}
              alt=""
              style={{
                objectFit: "contain",
                height: "10px",
                width: "10px",
                paddingBottom: "1px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export { RequestForm }
