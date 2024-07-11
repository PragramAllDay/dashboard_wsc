import {  StateType } from '@/utils/types/categories'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const stateApi = createApi({
    reducerPath: 'stateApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    endpoints: (builder) => ({
        getState: builder.query<StateType[], void>({
            query: () => "state",
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


