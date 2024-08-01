import { AbandonedCartType } from '@/utils/types/cms'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const abandonedCartApi = createApi({
    reducerPath: 'abandonedCartApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    endpoints: (builder) => ({
        getAbandonedCart: builder.query<AbandonedCartType[], void>({
            query: () => "abandoned-cart",
        }),
        postAbandonedCart: builder.mutation<AbandonedCartType, AbandonedCartType>({
            query: (newAbandonedCart) => {
                return {
                    url: `abandoned-cart`,
                    method: "POST",
                    body: newAbandonedCart,
                }
            },
        }),
        patchAbandonedCart: builder.mutation<AbandonedCartType, AbandonedCartType>({
            query: (updateAbandonedCart) => {
                return {
                    url: `abandoned-cart/${updateAbandonedCart.id}`,
                    method: "PATCH",
                    body: updateAbandonedCart,
                }
            },
        }),
        deleteAbandonedCart: builder.mutation<AbandonedCartType, string>({
            query: (id) => {
                return {
                    url: `abandoned-cart/${id}`,
                    method: "DELETE",
                }
            },
        }),
    }),
})


export const {
    useGetAbandonedCartQuery,
    usePostAbandonedCartMutation,
    usePatchAbandonedCartMutation,
    useDeleteAbandonedCartMutation
} = abandonedCartApi


