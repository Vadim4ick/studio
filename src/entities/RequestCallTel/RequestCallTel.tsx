import { formatPhone } from "@/shared/helpers/formatPhone.helper";
import { useGetRequestCall } from "./api/getRequestCall";
import { Skeleton } from "@/shared/ui/Skeleton";

const RequestCallTel = () => {
  const { data, isLoading, error } = useGetRequestCall();

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isLoading) {
    return <Skeleton className={"rounded-md"} width={233} />;
  }

  return (
    <div className="flex flex-col items-end text-[#2A2367]">
      <p className="text-2xl font-extrabold">
        {formatPhone(data?.contacts.tel)}
      </p>

      <p className="text-[12px] font-bold">{data?.contacts.text}</p>
    </div>
  );
};

export { RequestCallTel };
