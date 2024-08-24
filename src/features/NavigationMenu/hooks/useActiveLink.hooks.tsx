import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { navigation } from "../const/navigation.const"

const useActiveLink = () => {
  const [activeIdx, setActiveIdx] = useState(0)

  const pathname = usePathname()

  useEffect(() => {
    const activeIndex = navigation.findIndex((item) => item.path === pathname)

    setActiveIdx(activeIndex !== -1 ? activeIndex : 0)
  }, [activeIdx, pathname])

  return { navigation, activeIdx }
}

export { useActiveLink }
