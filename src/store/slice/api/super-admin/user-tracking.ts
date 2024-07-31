import { CMSUserTrackingType } from '@/utils/types/cms'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const userTrackingApi = createApi({
    reducerPath: 'userTrackingApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    endpoints: (builder) => ({
        getUserTracking: builder.query<CMSUserTrackingType[], void>({
            query: () => "user-tracking",
        }),
        postUserTracking: builder.mutation<CMSUserTrackingType, CMSUserTrackingType>({
            query: (newUserTracking) => {
                return {
                    url: `user-tracking`,
                    method: "POST",
                    body: newUserTracking,
                }
            },
        }),
        patchUserTracking: builder.mutation<CMSUserTrackingType, CMSUserTrackingType>({
            query: (updateUserTracking) => {
                return {
                    url: `user-tracking/${updateUserTracking.id}`,
                    method: "PATCH",
                    body: updateUserTracking,
                }
            },
        }),
        deleteUserTracking: builder.mutation<CMSUserTrackingType, string>({
            query: (id) => {
                return {
                    url: `user-tracking/${id}`,
                    method: "DELETE",
                }
            },
        }),
    }),
})


export const {
    useGetUserTrackingQuery,
    usePostUserTrackingMutation,
    usePatchUserTrackingMutation,
    useDeleteUserTrackingMutation
} = userTrackingApi


