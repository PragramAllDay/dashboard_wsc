import { CityType, CountryType, StateType } from '@/utils/types/categories'
import { CustomerType, StoreType } from '@/utils/types/stores'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const countryApi = createApi({
    reducerPath: 'countryApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    endpoints: (builder) => ({
        getCountry: builder.query<CountryType[], void>({
            query: () => "country",
        }),
        postCountry: builder.mutation<CountryType, StoreType>({
            query: (newCountry) => {
                return {
                    url: `country`,
                    method: "POST",
                    body: newCountry,
                }
            },
        }),
        patchCountry: builder.mutation<CountryType, StoreType>({
            query: (updateCountry) => {
                return {
                    url: `country/${updateCountry.id}`,
                    method: "PATCH",
                    body: updateCountry,
                }
            },
        }),
        deleteCountry: builder.mutation<CountryType, string>({
            query: (id) => {
                return {
                    url: `country/${id}`,
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


