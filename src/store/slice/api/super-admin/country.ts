import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CountryType } from '@/utils/types/categories'
import { RequestResponseType } from '@/utils/types/request'


export const countryApi = createApi({
    reducerPath: 'countryApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/v1/superadmin/' }),
    endpoints: (builder) => ({
        getCountry: builder.query<RequestResponseType, string>({
            query: (token) => ({
                url: "countries/",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }),
        }),
        postCountry: builder.mutation<any, CountryType>({
            query: (newCountry) => {
                return {
                    url: `countries/`,
                    method: "POST",
                    body: newCountry,
                }
            },
        }),
        patchCountry: builder.mutation<any, CountryType>({
            query: (updateCountry) => {
                return {
                    url: `countries`,
                    method: "PATCH",
                    body: updateCountry,
                }
            },
        }),
        deleteCountry: builder.mutation<any, string>({
            query: (id) => {
                return {
                    url: `countries/${id}`,
                    method: "DELETE",
                }
            },
        }),
    }),
})


export const {
    useGetCountryQuery,
    usePostCountryMutation,
    usePatchCountryMutation,
    useDeleteCountryMutation,
} = countryApi


