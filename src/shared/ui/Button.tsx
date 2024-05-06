import type { FC } from "react";

export interface ButtonProps {
  text: string;
}

const PrimaryButton: FC<ButtonProps> = ({ text }) => (
  <button className="rounded-md bg-cyan-200 px-5 py-2 transition hover:bg-orange-500 active:scale-[0.97]">
    {text}
  </button>
);

export { PrimaryButton };
