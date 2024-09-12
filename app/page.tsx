import { HomePage } from "@/views/HomePage"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Веб-Студия Barbaris: Профессиональное Создание Сайтов и Продвижение",
  description: "Полный спектр услуг по созданию и продвижению сайтов от веб-студии Barbaris. Получите свои первые заказы от наших сатов оптимизированных под введение бизнеса в интернете",
  keywords:
    "разработка сайтов,разработка высоконагруженных сайтов, CMS, админ панелей, Создание сайтов",
}

export default function Home() {
  return <HomePage />
}
