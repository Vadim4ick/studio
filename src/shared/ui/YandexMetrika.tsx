"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export default function YandexMetrika() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = `${pathname}?${searchParams}`
    // Проверяем, существует ли `ym` в глобальной области
    if (typeof window !== "undefined" && typeof window.ym === "function") {
      window.ym(98424024, "hit", url)
    }
  }, [pathname, searchParams])

  return null
}
