import clsx from "clsx"
import { LightIcon } from "@/shared/icons/theme/Light"
import { DarkIcon } from "@/shared/icons/theme/Dark"
import { $theme, Theme, changeTheme } from "@/shared/context/theme"
import { useUnit } from "effector-react"
import { AnimatePresence, motion } from "framer-motion"
import { useMedia } from "@/shared/hooks/useMedia.hooks"
import { closeBurger } from "@/shared/context/modal"

const SwithTheme = () => {
  const [theme] = useUnit([$theme])

  const isDesktop1150 = useMedia({ media: "max", number: 1150 })

  const onChange = (currentTheme: Theme) => {
    changeTheme(currentTheme)

    if (isDesktop1150.matches) {
      closeBurger()
    }
  }

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={clsx(
        "relative flex h-[50px] w-[100px] items-center justify-evenly rounded-lg bg-gray/10 dark:bg-gray",
        {
          "m-auto mt-4": isDesktop1150.matches,
        },
      )}
      aria-label="Theme"
    >
      <AnimatePresence>
        <motion.label
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className={clsx(
            "relative z-10 flex size-10 cursor-pointer items-center justify-center rounded-full",
          )}
          title="light"
        >
          {theme === "light" && (
            <motion.span
              initial={{ x: 30 }}
              animate={{ x: 0 }}
              exit={{ x: 30 }}
              className="z-1 absolute left-0 top-0 size-[40px] rounded-full bg-white"
            />
          )}

          <input
            type="radio"
            name="theme"
            className="absolute h-0 w-0 opacity-0"
            checked={theme === "light"}
            onChange={() => onChange("light")}
          />

          <motion.div
            key={theme}
            initial={{ rotate: 90 }}
            animate={{ rotate: 45 }}
          >
            <LightIcon
              className={clsx(
                "size-8 rounded-full",
                theme === "light" ? "text-yellow-400" : "text-iconBg",
              )}
            />
          </motion.div>
        </motion.label>
      </AnimatePresence>

      <AnimatePresence>
        <motion.label
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className={clsx(
            "relative z-10 flex size-10 cursor-pointer items-center justify-center rounded-full before:absolute before:content-['']",
          )}
          title="dark"
        >
          {theme === "dark" && (
            <motion.span
              initial={{ x: -30 }}
              animate={{ x: 0 }}
              exit={{ x: -30 }}
              className="absolute left-0 top-0 size-[40px] rounded-full bg-iconBg"
            />
          )}

          <input
            type="radio"
            name="theme"
            className="absolute h-0 w-0 opacity-0"
            checked={theme === "dark"}
            onChange={() => onChange("dark")}
          />

          <DarkIcon
            isDark={theme === "dark"}
            className={clsx(
              "z-10 size-6 rounded-full",
              theme === "dark" ? "text-white" : "text-[#94a3b8]",
            )}
          />
        </motion.label>
      </AnimatePresence>
    </motion.span>
  )
}

export { SwithTheme }
