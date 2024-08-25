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
  title: "Create Next App",
  description: "Generated by create next app",
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
