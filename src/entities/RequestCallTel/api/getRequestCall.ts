import { KEYS } from "@/shared/const/queryKey.const"
import { gql } from "@/shared/graphql/client"
import { useQuery } from "@tanstack/react-query"

export const useGetRequestCall = () =>
  useQuery({
    queryKey: [KEYS.GET_CONTACTS],
    queryFn: () => gql.GetRequestCall(),
  })
