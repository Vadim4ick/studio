"use client";

import Image from "next/image";
import { useActiveLink } from "./hooks/useActiveLink";
import Link from "next/link";
import clsx from "clsx";
import { RequestCall } from "@/features/RequestCall";

const Header = () => {
  const { navigation, activeIdx } = useActiveLink();

  return (
    <header className="flex items-center pt-8">
      <div className="mx-auto w-full max-w-[1280px] px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-11">
            <Link href={"/"}>
              <Image
                src={"/image/logo.png"}
                priority
                width={160}
                height={55}
                alt="logoImage"
              />
            </Link>

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
          </div>

          <RequestCall />
        </div>
      </div>
    </header>
  );
};

export { Header };
