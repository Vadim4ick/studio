import { WhatYouGetItem } from "@/entities/WhatYouGet"
import { whatyougetlist } from "@/entities/WhatYouGet"

const WhatYouGet = () => (
  <section className="m-auto max-w-[1260px] px-4 py-[140px]">
    <h2 className="text mb-[54px] text-lg font-extrabold md:mb-8 md:text-2xl lg:mb-7 lg:text-4xl">
      Что вы <span className=" text-primary-500">получаете ?</span>
    </h2>
    {whatyougetlist.map((item) => (
      <WhatYouGetItem
        key={item.id}
        id={item.id}
        imageUrl={item.imageUrl}
        title={item.title}
        options={item.options}
      />
    ))}
    {/* <div className="grid grid-cols-1 gap-0">
      <div className="flex">
        <div>
          <Image src="/image/order.png" width={521} height={355} alt="div" />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="mb-[17px] text-lg font-bold text-primary-500">
            Оформление заказа
          </h3>
          <ul className="text list-inside list-disc">
            <li className=" text-sm leading-6">личный кабинет</li>
            <li className=" text-sm leading-6">
              корзина с отображением выбранных товаров
            </li>
            <li className=" text-sm leading-6">
              оформление заказа с указанием контактных данных
            </li>
            <li className=" text-sm leading-6">
              возможность приема онлайн-платежей
            </li>
            <li className=" text-sm leading-6">
              использование купонов, скидок и специальных предложений
            </li>
          </ul>
        </div>
      </div>
      <div className="-mt-10 flex flex-row-reverse">
        <div>
          <Image src="/image/catalog.png" width={521} height={355} alt="div" />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="mb-[17px] text-lg font-bold text-primary-500">
            Оформление заказа
          </h3>
          <ul className="text list-inside list-disc">
            <li className=" text-sm leading-6">личный кабинет</li>
            <li className=" text-sm leading-6">
              корзина с отображением выбранных товаров
            </li>
            <li className=" text-sm leading-6">
              оформление заказа с указанием контактных данных
            </li>
            <li className=" text-sm leading-6">
              возможность приема онлайн-платежей
            </li>
            <li className=" text-sm leading-6">
              использование купонов, скидок и специальных предложений
            </li>
          </ul>
        </div>
      </div>
      <div className="flex">
        <div>
          <Image
            src="/image/integration.png"
            width={521}
            height={355}
            alt="div"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="mb-[17px] text-lg font-bold text-primary-500">
            Оформление заказа
          </h3>
          <ul className="text list-inside list-disc">
            <li className=" text-sm leading-6">личный кабинет</li>
            <li className=" text-sm leading-6">
              корзина с отображением выбранных товаров
            </li>
            <li className=" text-sm leading-6">
              оформление заказа с указанием контактных данных
            </li>
            <li className=" text-sm leading-6">
              возможность приема онлайн-платежей
            </li>
            <li className=" text-sm leading-6">
              использование купонов, скидок и специальных предложений
            </li>
          </ul>
        </div>
      </div>
      <div className="-mt-10 flex flex-row-reverse">
        <div>
          <Image src="/image/crm.png" width={521} height={355} alt="div" />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="mb-[17px] text-lg font-bold text-primary-500">
            Оформление заказа
          </h3>
          <ul className="text list-inside list-disc">
            <li className=" text-sm leading-6">личный кабинет</li>
            <li className=" text-sm leading-6">
              корзина с отображением выбранных товаров
            </li>
            <li className=" text-sm leading-6">
              оформление заказа с указанием контактных данных
            </li>
            <li className=" text-sm leading-6">
              возможность приема онлайн-платежей
            </li>
            <li className=" text-sm leading-6">
              использование купонов, скидок и специальных предложений
            </li>
          </ul>
        </div>
      </div>
    </div> */}
  </section>
)

export { WhatYouGet }
