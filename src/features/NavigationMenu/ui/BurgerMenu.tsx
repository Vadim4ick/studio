import { $menuIsOpen, toggleBurger } from "@/shared/context/modal";
import { useUnit } from "effector-react";
import { motion } from "framer-motion";
import { useEffect } from "react";

const variants = {
  open: { rotate: 45 },
  closed: { rotate: 0 },
};

const BurgerMenu = () => {
  const [open] = useUnit([$menuIsOpen]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [open]);

  return (
    <motion.div
      className="absolute right-0 z-20 h-6 w-6 cursor-pointer"
      animate={open ? "open" : "closed"}
      onClick={() => toggleBurger()}
    >
      <motion.div
        className="absolute right-0 top-1/4 h-0.5 w-7 bg-primary-500"
        variants={variants}
      />

      <motion.div
        className="absolute right-0 top-1/2 h-0.5 w-5 bg-primary-500"
        variants={{
          ...variants,
          open: { rotate: -45, width: "1.75rem", top: "6.5px" },
        }}
      />
    </motion.div>
  );
};

export { BurgerMenu };
