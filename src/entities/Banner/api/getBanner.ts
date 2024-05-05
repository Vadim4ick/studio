import { KEYS } from "@/shared/const/queryKey";
import { gql } from "@/shared/graphql/client";
import { useQuery } from "@tanstack/react-query";

export const useGetBanner = () =>
  useQuery({
    queryKey: [KEYS.GET_BANNER],
    queryFn: () => gql.GetBanner(),
  });
