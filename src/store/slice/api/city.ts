import { CityType } from '@/utils/types/categories'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const cityApi = createApi({
    reducerPath: 'cityApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    endpoints: (builder) => ({
        getCity: builder.query<CityType[], void>({
            query: () => "city",
        }),
        postCity: builder.mutation<CityType, CityType>({
            query: (newCity) => {
                return {
                    url: `city`,
                    method: "POST",
                    body: newCity,
                }
            },
        }),
        patchCity: builder.mutation<CityType, CityType>({
            query: (updateCity) => {
                return {
                    url: `city/${updateCity.id}`,
                    method: "PATCH",
                    body: updateCity,
                }
            },
        }),
        deleteCity: builder.mutation<CityType, string>({
            query: (id) => {
                return {
                    url: `city/${id}`,
                    method: "DELETE",
                }
            },
        }),
    }),
})


export const {
    useGetCityQuery,
    usePostCityMutation,
    usePatchCityMutation,
    useDeleteCityMutation,
} = cityApi


