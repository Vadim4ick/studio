import { BenefitCard } from "@/entities/BenefitItem";
import React from "react";

function BenefitsList() {
  return (
    <div className="mx-auto max-w-[1160px]">
      <div className="grid grid-cols-1 justify-items-center gap-y-10 md:grid-cols-2 md:gap-x-5 lg:grid-cols-3 lg:gap-y-[54px]">
        <BenefitCard />
        <BenefitCard />
        <BenefitCard />
        <BenefitCard />
        <BenefitCard />
        <BenefitCard />
      </div>
    </div>
  );
}

export { BenefitsList };
