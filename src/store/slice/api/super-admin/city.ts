import { CityType } from '@/utils/types/categories'
import { RequestResponseType } from '@/utils/types/request'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const cityApi = createApi({
    reducerPath: 'cityApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/v1/superadmin/' }),
    endpoints: (builder) => ({
        getCity: builder.query<RequestResponseType, string>({
            query: (token) => ({
                url: "cities/",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }),
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


