"use client";

import Image from "next/image";
import Link from "next/link";
import { RequestCall } from "@/features/RequestCall";
import { useMedia } from "@/shared/hooks/useMedia.hooks";
import { BurgerMenu, NavigationMenu } from "@/features/NavigationMenu";
import clsx from "clsx";
import { memo, useRef } from "react";
import { SwithTheme } from "@/features/SwitchTheme";

const Header = memo(() => {
  const isDesktop1150 = useMedia({ media: "max", number: 1150 });

  const headerRef = useRef(null);

  return (
    <header
      ref={headerRef}
      className={clsx(
        "z-10 flex w-full items-center pt-8 max-desktop:fixed max-desktop:pt-4",
      )}
    >
      <div className="mx-auto w-full max-w-[1280px] px-4">
        <div className="relative flex items-center justify-between">
          <div className="z-10 flex items-center gap-11">
            <Link href={"/"}>
              <Image
                src={"/image/logo.png"}
                priority
                width={160}
                height={55}
                alt="logoImage"
              />
            </Link>

            {headerRef.current && <NavigationMenu ref={headerRef} />}
          </div>

          <SwithTheme />

          {!isDesktop1150.matches ? <RequestCall /> : <BurgerMenu />}
        </div>
      </div>
    </header>
  );
});

export { Header };
