import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RequestResponseType } from '@/utils/types/request'
import { NewStoreType, StoreType } from '@/utils/types/stores'


export const storeApi = createApi({
    reducerPath: 'storeApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/api/v1/superadmin/',
    }),
    endpoints: (builder) => ({
        getStores: builder.query<RequestResponseType, string>({
            query: (token) => {
                return {
                    url: "stores",
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            },
        }),
        postStores: builder.mutation<StoreType, NewStoreType & { token: string }>({
            query: (newStore) => {
                const { token, ...storeData } = newStore
                return {
                    url: "stores/",
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    body: storeData,
                }
            },
        }),
        patchStores: builder.mutation<StoreType, NewStoreType & { token: string, id: string }>({
            query: (updateStore) => {
                const { token, id, ...store } = updateStore

                return {
                    url: `stores/${id}`,
                    method: "PATCH",
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    body: store,
                }
            },
        }),
        deleteStores: builder.mutation<StoreType, { id: string, token: string }>({
            query: (parms) => {
                const { token, id } = parms

                return {
                    url: `stores/${id}`,
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`
                    }

                }
            },
        }),
    }),
})


export const {
    useGetStoresQuery,
    usePostStoresMutation,
    usePatchStoresMutation,
    useDeleteStoresMutation
} = storeApi


