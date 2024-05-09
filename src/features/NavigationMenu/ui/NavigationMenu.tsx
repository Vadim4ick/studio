import { $menuIsOpen, closeBurger } from "@/shared/context/modal";
import { useMedia } from "@/shared/hooks/useMedia.hooks";
import { Portal } from "@/shared/ui/Portal";
import clsx from "clsx";
import Link from "next/link";
import { motion } from "framer-motion";
import { useUnit } from "effector-react";
import { Overlay } from "@/shared/ui/Overlay";
import { Button } from "@/shared/ui/Button";
import { forwardRef } from "react";
import { useActiveLink } from "../hooks/useActiveLink.hooks";

const NavigationMenu = forwardRef<HTMLElement>((_, ref) => {
  const { navigation, activeIdx } = useActiveLink();
  const [open] = useUnit([$menuIsOpen]);

  const isDesktop1150 = useMedia({ media: "max", number: 1150 });

  if (!isDesktop1150.matches) {
    return (
      <nav>
        <ul className="flex gap-6">
          {navigation.map((el, i) => (
            <li
              className={clsx("font-bold", {
                "text-[#6B5AF9]": i === activeIdx,
              })}
              key={el.path}
            >
              <Link href={el.path}>{el.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  return (
    <Portal element={(ref as { current: HTMLElement }).current}>
      {open && (
        <>
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, ease: "easeInOut" }}
            className="absolute left-1/2 top-[175px] z-20 h-full translate-x-[-50%]"
          >
            <ul className="flex flex-col items-center gap-5">
              {navigation.map((el, i) => (
                <li
                  className={clsx("font-bold", {
                    "text-[#6B5AF9]": i === activeIdx,
                  })}
                  key={el.path}
                >
                  <Link
                    className="text-xl"
                    onClick={() => closeBurger()}
                    href={el.path}
                  >
                    {el.name}
                  </Link>
                </li>
              ))}
            </ul>

            <Button variant="secondary" className="mt-6 w-full text-nowrap">
              Заказать звонок
            </Button>
          </motion.nav>

          <Overlay />
        </>
      )}
    </Portal>
  );
});

export { NavigationMenu };
