import { ManageNewsLetterType } from '@/utils/types/cms'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const manageNewsLetterApi = createApi({
    reducerPath: 'manageNewsLetterApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    endpoints: (builder) => ({
        getManageNewsLetter: builder.query<ManageNewsLetterType[], void>({
            query: () => "manage-news-letter",
        }),
        postManageNewsLetter: builder.mutation<ManageNewsLetterType, ManageNewsLetterType>({
            query: (newManageNewsLetter) => {
                return {
                    url: `manage-news-letter`,
                    method: "POST",
                    body: newManageNewsLetter,
                }
            },
        }),
        patchManageNewsLetter: builder.mutation<ManageNewsLetterType, ManageNewsLetterType>({
            query: (updateManageNewsLetter) => {
                return {
                    url: `manage-news-letter/${updateManageNewsLetter.id}`,
                    method: "PATCH",
                    body: updateManageNewsLetter,
                }
            },
        }),
        deleteManageNewsLetter: builder.mutation<ManageNewsLetterType, string>({
            query: (id) => {
                return {
                    url: `manage-news-letter/${id}`,
                    method: "DELETE",
                }
            },
        }),
    }),
})


export const {
    useGetManageNewsLetterQuery,
    usePostManageNewsLetterMutation,
    usePatchManageNewsLetterMutation,
    useDeleteManageNewsLetterMutation
} = manageNewsLetterApi



