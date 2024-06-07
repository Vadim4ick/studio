import React from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { Button } from "@/shared/ui/Button"

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
  console.log("errors: ", errors)

  return (
    <div className="w-full bg-white sm:max-w-md md:mt-0 xl:p-0">
      <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
        <h1 className="text-center text-xl font-bold leading-tight tracking-tight md:text-2xl">
          Заявка на консультацию
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 md:space-y-6"
          action="#"
        >
          <div>
            <label
              htmlFor="name"
              className="mb-1 block text-base font-medium text-gray"
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
              className="mb-1 block text-base font-medium text-gray"
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
          {/* <input type="submit" /> */}
          <Button variant="secondary" type="submit" className="w-[374px]">
            Отправить
          </Button>
        </form>
      </div>
    </div>
  )
}

export { RequestForm }
