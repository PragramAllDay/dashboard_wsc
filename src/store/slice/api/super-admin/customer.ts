import { CityType, CountryType, StateType } from '@/utils/types/categories'
import { CustomerType, StoreType } from '@/utils/types/stores'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const customerApi = createApi({
    reducerPath: 'customerApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    endpoints: (builder) => ({
        getCustomers: builder.query<CustomerType[], void>({
            query: () => "customer",
        }),
        postCustomer: builder.mutation<CustomerType, StoreType>({
            query: (newCustomer) => {
                return {
                    url: `customer`,
                    method: "POST",
                    body: newCustomer,
                }
            },
        }),
        patchCustomer: builder.mutation<CustomerType, StoreType>({
            query: (updateCustomer) => {
                return {
                    url: `customer/${updateCustomer.id}`,
                    method: "PATCH",
                    body: updateCustomer,
                }
            },
        }),
        deleteCustomer: builder.mutation<CustomerType, string>({
            query: (id) => {
                return {
                    url: `customer/${id}`,
                    method: "DELETE",
                }
            },
        }),
    }),
})


export const {
    useGetCustomersQuery,
    usePostCustomerMutation,
    usePatchCustomerMutation,
    useDeleteCustomerMutation,
} = customerApi


