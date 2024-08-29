"use client"

import Link from "next/link"
import { useMedia } from "@/shared/hooks/useMedia.hooks"
import { BurgerMenu, NavigationMenu } from "@/features/NavigationMenu"
import clsx from "clsx"
import { memo, useRef } from "react"
import { SwithTheme } from "@/features/SwitchTheme"
import { Logo } from "@/shared/icons/logo"

const Header = memo(() => {
  const isDesktop1150 = useMedia({ media: "max", number: 1150 })

  const headerRef = useRef(null)

  return (
    <header
      ref={headerRef}
      className={clsx(
        "bg-background/95 sticky top-0 z-[60] flex w-full items-center border-b border-primary-800 p-4 shadow-md backdrop-blur max-desktop:pt-4",
      )}
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 ">
        <div className="relative flex items-center justify-between">
          <div className="z-10 flex items-center gap-11">
            <Link href={"/"}>
              <Logo />
            </Link>

            {headerRef.current && (
              <NavigationMenu ref={headerRef} SwithTheme={SwithTheme} />
            )}
          </div>

          {!isDesktop1150.matches ? (
            <>
              {/* <RequestCall /> */}
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
