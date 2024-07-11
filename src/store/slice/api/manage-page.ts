import { CMSPagesType } from '@/utils/types/cms'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const managePageApi = createApi({
    reducerPath: 'managePageApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    endpoints: (builder) => ({
        getManagePage: builder.query<CMSPagesType[], void>({
            query: () => "manage-page",
        }),
        postManagePage: builder.mutation<CMSPagesType, CMSPagesType>({
            query: (newManagePage) => {
                return {
                    url: `manage-page`,
                    method: "POST",
                    body: newManagePage,
                }
            },
        }),
        patchManagePage: builder.mutation<CMSPagesType, CMSPagesType>({
            query: (updateManagePage) => {
                return {
                    url: `manage-page/${updateManagePage.id}`,
                    method: "PATCH",
                    body: updateManagePage,
                }
            },
        }),
        deleteManagePage: builder.mutation<CMSPagesType, string>({
            query: (id) => {
                return {
                    url: `manage-page/${id}`,
                    method: "DELETE",
                }
            },
        }),
    }),
})


export const {
    useGetManagePageQuery,
    usePostManagePageMutation,
    usePatchManagePageMutation,
    useDeleteManagePageMutation
} = managePageApi


