import { CategoryType } from '@/utils/types/categories'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const categoriesApi = createApi({
    reducerPath: 'categoriesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    endpoints: (builder) => ({
        getCategories: builder.query<CategoryType[], void>({
            query: () => "categories",
        }),
        postCategories: builder.mutation<CategoryType, CategoryType>({
            query: (newStore) => {
                return {
                    url: `categories`,
                    method: "POST",
                    body: newStore,
                }
            },
        }),
        patchCategories: builder.mutation<CategoryType, CategoryType>({
            query: (updateStore) => {
                return {
                    url: `categories/${updateStore.id}`,
                    method: "PATCH",
                    body: updateStore,
                }
            },
        }),
        deleteCategories: builder.mutation<CategoryType, string>({
            query: (id) => {
                return {
                    url: `categories/${id}`,
                    method: "DELETE",
                }
            },
        }),
    }),
})


export const {

    useGetCategoriesQuery,
    usePostCategoriesMutation,
    usePatchCategoriesMutation,
    useDeleteCategoriesMutation
} = categoriesApi


