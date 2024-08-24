import { RequestCallTel } from "@/entities/RequestCallTel"
import { Button } from "@/shared/ui/Button"

const RequestCall = () => (
  <div className="flex gap-[20px]">
    <RequestCallTel />

    <Button variant="secondary" className="">
      Заказать звонок
    </Button>
  </div>
)

export { RequestCall }
