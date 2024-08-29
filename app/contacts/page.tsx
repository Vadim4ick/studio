import { ContactsPage } from "@/views/ContactsPage"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Контакты | Barbaris",
  description: "Barbaris создание интернет-магазинов и web-сервисов.",
  keywords: "разработка сайтов, next js, node js, react. Создание сайтов",
}

const Page = () => <ContactsPage />

export default Page
