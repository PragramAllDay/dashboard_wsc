import { StateType } from '@/utils/types/categories'
import { RequestResponseType } from '@/utils/types/request'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const stateApi = createApi({
    reducerPath: 'stateApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/v1/superadmin/' }),
    endpoints: (builder) => ({
        getState: builder.query<RequestResponseType, string>({
            query: (token) => ({
                url: "states",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }),
        }),
        postState: builder.mutation<StateType, StateType>({
            query: (newState) => {
                return {
                    url: `state`,
                    method: "POST",
                    body: newState,
                }
            },
        }),
        patchState: builder.mutation<StateType, StateType>({
            query: (updateState) => {
                return {
                    url: `state/${updateState.id}`,
                    method: "PATCH",
                    body: updateState,
                }
            },
        }),
        deleteState: builder.mutation<StateType, string>({
            query: (id) => {
                return {
                    url: `state/${id}`,
                    method: "DELETE",
                }
            },
        }),
    }),
})


export const {
    useGetStateQuery,
    usePostStateMutation,
    usePatchStateMutation,
    useDeleteStateMutation
} = stateApi


