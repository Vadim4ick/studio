"use client"

import Link from "next/link"
import { RequestCall } from "@/features/RequestCall"
import { useMedia } from "@/shared/hooks/useMedia.hooks"
import { BurgerMenu, NavigationMenu } from "@/features/NavigationMenu"
import clsx from "clsx"
import { memo, useEffect, useRef, useState } from "react"
import { SwithTheme } from "@/features/SwitchTheme"
import { Logo } from "@/shared/icons/logo"
import { useUnit } from "effector-react"
import { $theme } from "@/shared/context/theme"
import { cn } from "@/shared/helpers/cn.helper"
import { $menuIsOpen } from "@/shared/context/modal"

const Header = memo(() => {
  const isDesktop1150 = useMedia({ media: "max", number: 1150 })

  const [theme, menuIsOpen] = useUnit([$theme, $menuIsOpen])

  const headerRef = useRef(null)

  const [shouldApplyClass, setShouldApplyClass] = useState(false)

  useEffect(() => {
    if (theme === "dark" && menuIsOpen) {
      const timer = setTimeout(() => {
        setShouldApplyClass(true)
      }, 500)
      return () => clearTimeout(timer)
    } else {
      setShouldApplyClass(false)
    }
  }, [theme, menuIsOpen])

  return (
    <header
      ref={headerRef}
      className={clsx(
        "z-10 flex w-full items-center p-4 max-desktop:fixed max-desktop:pt-4",
      )}
    >
      <div className="mx-auto w-full max-w-[1280px] px-4">
        <div className="relative flex items-center justify-between">
          <div className="z-10 flex items-center gap-11">
            <Link href={"/"}>
              <Logo
                className={cn("text-primary-900 dark:text-white", {
                  "dark:text-primary-900": shouldApplyClass,
                })}
              />
            </Link>

            {headerRef.current && (
              <NavigationMenu ref={headerRef} SwithTheme={SwithTheme} />
            )}
          </div>

          {!isDesktop1150.matches ? (
            <>
              <RequestCall />
              <SwithTheme />
            </>
          ) : (
            <BurgerMenu />
          )}
        </div>
      </div>
    </header>
  )
})

export { Header }
