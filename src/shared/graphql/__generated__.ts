import { GraphQLClient, RequestOptions } from "graphql-request"
import gql from "graphql-tag"
export type Maybe<T> = T
export type InputMaybe<T> = T
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never
    }
type GraphQLClientRequestHeaders = RequestOptions["requestHeaders"]
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  GraphQLBigInt: { input: any; output: any }
  GraphQLStringOrFloat: { input: any; output: any }
  JSON: { input: any; output: any }
}

export enum EventEnum {
  Create = "create",
  Delete = "delete",
  Update = "update",
}

export type Query = {
  readonly __typename?: "Query"
  readonly banner: ReadonlyArray<Banner>
  readonly banner_aggregated: ReadonlyArray<Banner_Aggregated>
  readonly banner_by_id: Maybe<Banner>
  readonly banner_by_version: Maybe<Version_Banner>
  readonly contacts: Maybe<Contacts>
  readonly contacts_by_version: Maybe<Version_Contacts>
}

export type QueryBannerArgs = {
  filter: InputMaybe<Banner_Filter>
  limit: InputMaybe<Scalars["Int"]["input"]>
  offset: InputMaybe<Scalars["Int"]["input"]>
  page: InputMaybe<Scalars["Int"]["input"]>
  search: InputMaybe<Scalars["String"]["input"]>
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars["String"]["input"]>>>
}

export type QueryBanner_AggregatedArgs = {
  filter: InputMaybe<Banner_Filter>
  groupBy: InputMaybe<ReadonlyArray<InputMaybe<Scalars["String"]["input"]>>>
  limit: InputMaybe<Scalars["Int"]["input"]>
  offset: InputMaybe<Scalars["Int"]["input"]>
  page: InputMaybe<Scalars["Int"]["input"]>
  search: InputMaybe<Scalars["String"]["input"]>
  sort: InputMaybe<ReadonlyArray<InputMaybe<Scalars["String"]["input"]>>>
}

export type QueryBanner_By_IdArgs = {
  id: Scalars["ID"]["input"]
  version: InputMaybe<Scalars["String"]["input"]>
}

export type QueryBanner_By_VersionArgs = {
  id: Scalars["ID"]["input"]
  version: Scalars["String"]["input"]
}

export type QueryContacts_By_VersionArgs = {
  version: Scalars["String"]["input"]
}

export type Subscription = {
  readonly __typename?: "Subscription"
  readonly banner_mutated: Maybe<Banner_Mutated>
  readonly contacts_mutated: Maybe<Contacts_Mutated>
}

export type SubscriptionBanner_MutatedArgs = {
  event: InputMaybe<EventEnum>
}

export type SubscriptionContacts_MutatedArgs = {
  event: InputMaybe<EventEnum>
}

export type Banner = {
  readonly __typename?: "banner"
  readonly id: Scalars["ID"]["output"]
  readonly title: Maybe<Scalars["String"]["output"]>
}

export type Banner_Aggregated = {
  readonly __typename?: "banner_aggregated"
  readonly avg: Maybe<Banner_Aggregated_Fields>
  readonly avgDistinct: Maybe<Banner_Aggregated_Fields>
  readonly count: Maybe<Banner_Aggregated_Count>
  readonly countAll: Maybe<Scalars["Int"]["output"]>
  readonly countDistinct: Maybe<Banner_Aggregated_Count>
  readonly group: Maybe<Scalars["JSON"]["output"]>
  readonly max: Maybe<Banner_Aggregated_Fields>
  readonly min: Maybe<Banner_Aggregated_Fields>
  readonly sum: Maybe<Banner_Aggregated_Fields>
  readonly sumDistinct: Maybe<Banner_Aggregated_Fields>
}

export type Banner_Aggregated_Count = {
  readonly __typename?: "banner_aggregated_count"
  readonly id: Maybe<Scalars["Int"]["output"]>
  readonly title: Maybe<Scalars["Int"]["output"]>
}

export type Banner_Aggregated_Fields = {
  readonly __typename?: "banner_aggregated_fields"
  readonly id: Maybe<Scalars["Float"]["output"]>
}

export type Banner_Filter = {
  readonly _and: InputMaybe<ReadonlyArray<InputMaybe<Banner_Filter>>>
  readonly _or: InputMaybe<ReadonlyArray<InputMaybe<Banner_Filter>>>
  readonly id: InputMaybe<Number_Filter_Operators>
  readonly title: InputMaybe<String_Filter_Operators>
}

export type Banner_Mutated = {
  readonly __typename?: "banner_mutated"
  readonly data: Maybe<Banner>
  readonly event: Maybe<EventEnum>
  readonly key: Scalars["ID"]["output"]
}

export type Contacts = {
  readonly __typename?: "contacts"
  readonly id: Scalars["ID"]["output"]
  readonly tel: Maybe<Scalars["GraphQLBigInt"]["output"]>
  readonly text: Maybe<Scalars["String"]["output"]>
}

export type Contacts_Mutated = {
  readonly __typename?: "contacts_mutated"
  readonly data: Maybe<Contacts>
  readonly event: Maybe<EventEnum>
  readonly key: Scalars["ID"]["output"]
}

export type Number_Filter_Operators = {
  readonly _between: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars["GraphQLStringOrFloat"]["input"]>>
  >
  readonly _eq: InputMaybe<Scalars["GraphQLStringOrFloat"]["input"]>
  readonly _gt: InputMaybe<Scalars["GraphQLStringOrFloat"]["input"]>
  readonly _gte: InputMaybe<Scalars["GraphQLStringOrFloat"]["input"]>
  readonly _in: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars["GraphQLStringOrFloat"]["input"]>>
  >
  readonly _lt: InputMaybe<Scalars["GraphQLStringOrFloat"]["input"]>
  readonly _lte: InputMaybe<Scalars["GraphQLStringOrFloat"]["input"]>
  readonly _nbetween: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars["GraphQLStringOrFloat"]["input"]>>
  >
  readonly _neq: InputMaybe<Scalars["GraphQLStringOrFloat"]["input"]>
  readonly _nin: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars["GraphQLStringOrFloat"]["input"]>>
  >
  readonly _nnull: InputMaybe<Scalars["Boolean"]["input"]>
  readonly _null: InputMaybe<Scalars["Boolean"]["input"]>
}

export type String_Filter_Operators = {
  readonly _contains: InputMaybe<Scalars["String"]["input"]>
  readonly _empty: InputMaybe<Scalars["Boolean"]["input"]>
  readonly _ends_with: InputMaybe<Scalars["String"]["input"]>
  readonly _eq: InputMaybe<Scalars["String"]["input"]>
  readonly _icontains: InputMaybe<Scalars["String"]["input"]>
  readonly _iends_with: InputMaybe<Scalars["String"]["input"]>
  readonly _in: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars["String"]["input"]>>
  >
  readonly _istarts_with: InputMaybe<Scalars["String"]["input"]>
  readonly _ncontains: InputMaybe<Scalars["String"]["input"]>
  readonly _nempty: InputMaybe<Scalars["Boolean"]["input"]>
  readonly _nends_with: InputMaybe<Scalars["String"]["input"]>
  readonly _neq: InputMaybe<Scalars["String"]["input"]>
  readonly _niends_with: InputMaybe<Scalars["String"]["input"]>
  readonly _nin: InputMaybe<
    ReadonlyArray<InputMaybe<Scalars["String"]["input"]>>
  >
  readonly _nistarts_with: InputMaybe<Scalars["String"]["input"]>
  readonly _nnull: InputMaybe<Scalars["Boolean"]["input"]>
  readonly _nstarts_with: InputMaybe<Scalars["String"]["input"]>
  readonly _null: InputMaybe<Scalars["Boolean"]["input"]>
  readonly _starts_with: InputMaybe<Scalars["String"]["input"]>
}

export type Version_Banner = {
  readonly __typename?: "version_banner"
  readonly id: Scalars["ID"]["output"]
  readonly title: Maybe<Scalars["String"]["output"]>
}

export type Version_Contacts = {
  readonly __typename?: "version_contacts"
  readonly id: Scalars["ID"]["output"]
  readonly tel: Maybe<Scalars["GraphQLBigInt"]["output"]>
  readonly text: Maybe<Scalars["String"]["output"]>
}

export type GetBannerQueryVariables = Exact<{ [key: string]: never }>

export type GetBannerQuery = {
  readonly __typename?: "Query"
  readonly banner: ReadonlyArray<{
    readonly __typename?: "banner"
    readonly id: string
    readonly title: string
  }>
}

export type GetRequestCallQueryVariables = Exact<{ [key: string]: never }>

export type GetRequestCallQuery = {
  readonly __typename?: "Query"
  readonly contacts: {
    readonly __typename?: "contacts"
    readonly id: string
    readonly text: string
    readonly tel: any
  }
}

export const GetBannerDocument = gql`
  query GetBanner {
    banner {
      id
      title
    }
  }
`
export const GetRequestCallDocument = gql`
  query GetRequestCall {
    contacts {
      id
      text
      tel
    }
  }
`

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string,
  variables?: any,
) => Promise<T>

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType,
  _variables,
) => action()

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper,
) {
  return {
    GetBanner(
      variables?: GetBannerQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetBannerQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetBannerQuery>(GetBannerDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "GetBanner",
        "query",
        variables,
      )
    },
    GetRequestCall(
      variables?: GetRequestCallQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders,
    ): Promise<GetRequestCallQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetRequestCallQuery>(
            GetRequestCallDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        "GetRequestCall",
        "query",
        variables,
      )
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>
