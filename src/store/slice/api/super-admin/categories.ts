import { CategoryType } from '@/utils/types/categories'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const categoriesApi = createApi({
    reducerPath: 'categoriesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/v1/superadmin/' }),
    endpoints: (builder) => ({
        postCategories: builder.mutation<any, CategoryType & { token: string }>({
            query: (newCategory) => {
                const { token, ...category } = newCategory

                return {
                    url: `categories`,
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    body: category,
                }
            },
        }),
        getCategories: builder.query<any, string>({
            query: (token) => ({
                url: "categories",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        }),
        getParentCategories: builder.query<any, string>({
            query: (token) => ({
                url: "categories/parents",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        }),
        putSortCategories: builder.mutation<any, any>({
            query: (categoryIdData) => {
                const { token, ...categoryIdList } = categoryIdData
                return {
                    url: `categories/sort`,
                    method: "PUT",
                    body: { categoryIds: categoryIdList },
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            },
        }),
        getCategory: builder.query<any, any>({
            query: ({ id, token }) => ({
                url: `categories/${id}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }),
        }),
        putCategory: builder.mutation<any, any>({
            query: (data) => {
                const { token, id, ...category } = data

                return {
                    url: `categories/${category.id}`,
                    method: "PUT",
                    body: category,
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            },
        }),
        deleteCategories: builder.mutation<any, { id: string, token: string }>({
            query: ({ token, id }) => {
                return {
                    url: `categories/${id}`,
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
    usePostCategoriesMutation,
    useGetCategoriesQuery,
    useGetParentCategoriesQuery,
    usePutCategoryMutation,
    usePutSortCategoriesMutation,
    useDeleteCategoriesMutation
} = categoriesApi


