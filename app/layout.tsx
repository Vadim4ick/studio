import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Providers } from "@/app/providers/Provider"
import { Header } from "@/widgets/Header"
import { Footer } from "@/widgets/Footer"

import "@/globalStyles"

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: {
    template: "%s |  Веб-Студия Barbaris",
    default: " Веб-Студия Barbaris",
  },
  description:
    "Полный спектр услуг по созданию и продвижению сайтов от веб-студии Barbaris. Получите свои первые заказы от наших сайтов оптимизированных под введение бизнеса в интернете",
  keywords:
    "разработка сайтов,разработка высоконагруженных сайтов, CMS, админ панелей, Создание сайтов",
}

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode
  modal: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-light`}>
        <Providers>
          <Header />

          {children}

          <Footer />
        </Providers>

        {modal}
      </body>
    </html>
  )
}
