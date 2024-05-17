import clsx from "clsx";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/shared/ui/Card";

type CardProps = React.ComponentProps<typeof Card>;

export function BenefitCard({ className, ...props }: CardProps) {
  return (
    <Card className={clsx("max-w-[373px] shadow-lg", [className])} {...props}>
      <CardHeader>
        <CardTitle className="text-[64px] font-bold text-white drop-shadow-lg">
          01
        </CardTitle>
        <div className="w-44 border-0 border-b-2 border-red-400"> </div>
        <CardDescription className="text-sm font-bold">
          Удобный интерфейс
        </CardDescription>
      </CardHeader>
      <CardContent className="">
        <p className="text-xs font-normal leading-none">
          Блоковая подача информации, удобные кнопки, карточки товаров, понятное
          меню и легкая навигация по многостраничному сайту.
        </p>
      </CardContent>
    </Card>
  );
}
