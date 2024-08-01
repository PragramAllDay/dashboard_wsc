import { AccountsType } from '@/utils/types/accounts'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const accountApi = createApi({
    reducerPath: 'accountApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    endpoints: (builder) => ({
        getAccount: builder.query<AccountsType[], void>({
            query: () => "account",
        }),
        postAccount: builder.mutation<AccountsType, AccountsType>({
            query: (newAccount) => {
                return {
                    url: `account`,
                    method: "POST",
                    body: newAccount,
                }
            },
        }),
        patchAccount: builder.mutation<AccountsType, AccountsType>({
            query: (updateAccount) => {
                return {
                    url: `account/${updateAccount.id}`,
                    method: "PATCH",
                    body: updateAccount,
                }
            },
        }),
        deleteAccount: builder.mutation<AccountsType, string>({
            query: (id) => {
                return {
                    url: `account/${id}`,
                    method: "DELETE",
                }
            },
        }),
    }),
})


export const {
    useGetAccountQuery,
    usePostAccountMutation,
    usePatchAccountMutation,
    useDeleteAccountMutation
} = accountApi


