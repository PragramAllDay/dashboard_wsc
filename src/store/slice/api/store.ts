import { CityType, CountryType, StateType } from '@/utils/types/categories'
import { CustomerType, StoreType } from '@/utils/types/stores'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const storeApi = createApi({
    reducerPath: 'storeApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    endpoints: (builder) => ({
        getStores: builder.query<StoreType[], void>({
            query: () => "stores",
        }),
        postStores: builder.mutation<StoreType, StoreType>({
            query: (newStore) => {
                return {
                    url: `stores`,
                    method: "POST",
                    body: newStore,
                }
            },
        }),
        patchStores: builder.mutation<StoreType, StoreType>({
            query: (updateStore) => {
                return {
                    url: `stores/${updateStore.id}`,
                    method: "PATCH",
                    body: updateStore,
                }
            },
        }),
        deleteStores: builder.mutation<StoreType, string>({
            query: (id) => {
                return {
                    url: `stores/${id}`,
                    method: "DELETE",
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


