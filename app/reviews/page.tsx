import { ReviewsPage } from "@/views/ReviewsPage"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Портфолио | Barbaris",
  description: "Портфолио. Кейсы по разработке сайтов и интернет-магазинов",
  keywords: "портфолио, кейсы разработка сайтов, кейсы интернет-магазин",
}

const Page = () => <ReviewsPage />

export default Page
