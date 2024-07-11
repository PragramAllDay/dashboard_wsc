import { CategoryType } from '@/utils/types/categories'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const storeCategoryApi = createApi({
    reducerPath: 'storeCategoryApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    endpoints: (builder) => ({
        getStoreCategory: builder.query<CategoryType[], void>({
            query: () => "store-category",
        }),
        postStoreCategory: builder.mutation<CategoryType, CategoryType>({
            query: (newStore) => {
                return {
                    url: `store-category`,
                    method: "POST",
                    body: newStore,
                }
            },
        }),
        patchStoreCategory: builder.mutation<CategoryType, CategoryType>({
            query: (updateStore) => {
                return {
                    url: `store-category/${updateStore.id}`,
                    method: "PATCH",
                    body: updateStore,
                }
            },
        }),
        deleteStoreCategory: builder.mutation<CategoryType, string>({
            query: (id) => {
                return {
                    url: `store-category/${id}`,
                    method: "DELETE",
                }
            },
        }),
    }),
})


export const {
    useGetStoreCategoryQuery,
    usePostStoreCategoryMutation,
    usePatchStoreCategoryMutation,
    useDeleteStoreCategoryMutation
} = storeCategoryApi


