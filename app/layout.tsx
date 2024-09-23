import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Providers } from "@/app/providers/Provider"
import { Header } from "@/widgets/Header"
import { Footer } from "@/widgets/Footer"
import Script from "next/script"

import "@/globalStyles"
import { Suspense } from "react"
import YandexMetrika from "@/shared/ui/YandexMetrika"

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
  console.log(123)

  return (
    <html lang="ru">
      <body className={`${montserrat.className} bg-light`}>
        <Providers>
          <Header />

          {children}

          <Footer />
        </Providers>

        {modal}

        <Script
          id="metrika-counter"
          type="text/javascript"
          strategy="afterInteractive"
        >
          {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
 
              ym(98424024, "init", {
                    defer: true,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
              });`}
        </Script>
        <Suspense fallback={<></>}>
          <YandexMetrika />
        </Suspense>
      </body>
    </html>
  )
}
