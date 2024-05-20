import clsx from "clsx";
import { LightIcon } from "@/shared/icons/theme/Light";
import { DarkIcon } from "@/shared/icons/theme/Dark";
import { $theme, changeTheme } from "@/shared/context/theme";
import { useUnit } from "effector-react";
import { motion } from "framer-motion";

const SwithTheme = () => {
  const theme = useUnit($theme);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex h-[50px] w-[100px] items-center justify-evenly rounded-lg bg-[#f1f5f9] dark:bg-[#64748b]"
      aria-label="Theme"
    >
      <motion.label
        // initial={{ scale: 0 }}
        // animate={{ scale: 1 }}
        className={clsx(
          "relative flex size-10 cursor-pointer items-center justify-center rounded-full  before:absolute before:content-['']",
          {
            "bg-white": theme === "light",
          },
        )}
        title="light"
      >
        <input
          type="radio"
          name="theme"
          className="absolute h-0 w-0 opacity-0"
          checked={theme === "light"}
          onChange={() => changeTheme("light")}
        />

        <motion.div
          key={theme}
          initial={{ rotate: 90 }}
          animate={{ rotate: 45 }}
        >
          <LightIcon
            className={clsx(
              "size-8 rounded-full",
              theme === "light" ? "text-yellow-400" : "text-[#94a3b8]",
            )}
          />
        </motion.div>
      </motion.label>

      <motion.label
        className={clsx(
          "relative flex size-10 cursor-pointer items-center justify-center rounded-full before:absolute before:content-['']",
          {
            "bg-[#475569]": theme === "dark",
          },
        )}
        title="dark"
      >
        <input
          type="radio"
          name="theme"
          className="absolute h-0 w-0 opacity-0"
          checked={theme === "dark"}
          onChange={() => changeTheme("dark")}
        />

        <DarkIcon
          isDark={theme === "dark"}
          className={clsx(
            "size-6 rounded-full",
            theme === "dark" ? "text-white" : "text-[#94a3b8]",
          )}
        />
      </motion.label>
    </motion.span>
  );
};

export { SwithTheme };
