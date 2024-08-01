
import { WebOrderType } from '@/utils/types/web-order'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const webOrderApi = createApi({
    reducerPath: 'webOrderApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    endpoints: (builder) => ({
        getWebOrder: builder.query<WebOrderType[], void>({
            query: () => "web-order",
        }),
        postWebOrder: builder.mutation<WebOrderType, WebOrderType>({
            query: (newStore) => {
                return {
                    url: `web-order`,
                    method: "POST",
                    body: newStore,
                }
            },
        }),
        patchWebOrder: builder.mutation<WebOrderType, WebOrderType>({
            query: (updateStore) => {
                return {
                    url: `web-order/${updateStore.id}`,
                    method: "PATCH",
                    body: updateStore,
                }
            },
        }),
        deleteWebOrder: builder.mutation<WebOrderType, string>({
            query: (id) => {
                return {
                    url: `web-order/${id}`,
                    method: "DELETE",
                }
            },
        }),
    }),
})


export const {

    useGetWebOrderQuery,
    usePostWebOrderMutation,
    usePatchWebOrderMutation,
    useDeleteWebOrderMutation
} = webOrderApi


