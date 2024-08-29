import { HomePage } from "@/views/HomePage"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Barbaris - создание и развитие сайтов",
  description: "Разработка сайтов, интернет-магазинов и web-сервисов",
  keywords:
    "разработка сайтов,разработка высоконагруженных сайтов, CMS, админ панелей, Создание сайтов",
}

export default function Home() {
  return <HomePage />
}
