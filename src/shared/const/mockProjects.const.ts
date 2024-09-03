export interface IReviewsItem {
  id: string | number
  title: string
  imageUrl: string
  imageUrl2X?: string

  subTitle: string
  aboutProject?: string
  images: string[]

  link: string
}

export const mockProjects: IReviewsItem[] = [
  {
    id: 1,
    title: "Creatin",
    imageUrl: "/image/projects/creatin/logo.png",
    imageUrl2X: "/image/projects/creatin/logo@2x.png",

    link: "https://creatin.ru/",

    subTitle: "Создание для дизайнерской веб-студии - Creatin.",
    images: [
      "/image/projects/creatin/moreDetails/1.png",
      "/image/projects/creatin/moreDetails/2.png",
      "/image/projects/creatin/moreDetails/3.png",
      "/image/projects/creatin/moreDetails/4.png",
    ],
    aboutProject:
      "Компания Creatin обратилась к нам, чтобы заказать корпоративный сайт. В результате мы создали сайт с полноценной админ панелью и так же в результате мы сделали выкладку на VPS сервер.",
  },
  //   {
  //     id: 2,
  //     title: "FromMorf",
  //     imageUrl: "/image/projects/fromMorf/logo.png",
  //     imageUrl2X: "/image/projects/fromMorf/logo@2x.png",
  //   },
  //   {
  //     id: 3,
  //     title: "Adress.store",
  //     imageUrl: "/image/projects/adresstore/logo.png",
  //     imageUrl2X: "/image/projects/adresstore/logo@2x.png",
  //   },
  //   {
  //     id: 4,
  //     title: "Kupicontoru",
  //     imageUrl: "/image/projects/kupicontoru/logo.png",
  //     imageUrl2X: "/image/projects/kupicontoru/logo@2x.png",
  //   },
]
