import { WhatYouGetList } from "../types"

export const whatyougetlist: WhatYouGetList[] = [
  {
    id: "1",
    imageUrl: "/image/catalog.png",
    title: "Каталог товаров",
    options: [
      {
        id: "1",
        description:
          "возможность выгружать свои товары в неограниченном количестве",
      },
      {
        id: "2",
        description: "добавлять и редактировать описание товаров",
      },
      {
        id: "3",
        description: "сортировать товары по заданным критериям",
      },
      {
        id: "4",
        description:
          "моментальная оплата товара или оформление при помощи добавления корзины",
      },
    ],
  },
  {
    id: "2",
    imageUrl: "/image/order.png",
    title: "Оформление заказа",
    options: [
      {
        id: "1",
        description: "личный кабинет",
      },
      {
        id: "2",
        description: "корзина с отображением выбранных товаров",
      },
      {
        id: "3",
        description: "оформление заказа с указанием контактных данных",
      },
      {
        id: "4",
        description: "возможность приема онлайн-платежей",
      },
      {
        id: "5",
        description: "использование купонов, скидок и специальных предложений",
      },
    ],
  },
  {
    id: "3",
    imageUrl: "/image/integration.png",
    title: "Интеграции",
    options: [
      {
        id: "1",
        description:
          "1С, Мой склад (выгрузка товаров на сайт, полная синхронизация)",
      },
      {
        id: "2",
        description: "Маркетплейсы (Яндекс.Маркет, Wildberries, Goods, Ozon)",
      },
      {
        id: "3",
        description: "Интеграция со службами доставки СДЭК, Почта России",
      },
    ],
  },
  {
    id: "4",
    imageUrl: "/image/crm.png",
    title: "СРМ",
    options: [
      {
        id: "1",
        description: "фиксация и отслеживание поступивших заявок",
      },
      {
        id: "2",
        description: "уведомления о заказах",
      },
      {
        id: "3",
        description: "отчетность магазина",
      },
    ],
  },
]
