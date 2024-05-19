import clsx from "clsx";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/shared/ui/Card";
import { Benefit } from "../model/types";

type Props = {
  className?: string;
  item: Benefit;
  index: number;
} & React.ComponentProps<typeof Card>;

export function BenefitCard({ className, item, index, ...props }: Props) {
  return (
    <Card className={clsx("max-w-[373px] !shadow-lg", [className])} {...props}>
      <CardHeader>
        <div className="text-[64px] font-bold text-white drop-shadow-lg">
          0{index + 1}
        </div>
        <div className="w-44 border-0 border-b-2 border-[#DA7B78]"> </div>
        <CardTitle className="text-sm font-bold">{item.title}</CardTitle>
      </CardHeader>
      <CardContent className="">
        <CardDescription className="text-xs font-normal leading-none">
          {item.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
