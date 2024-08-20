import { CustomerType, StoreType } from '@/utils/types/stores'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const customerApi = createApi({
    reducerPath: 'customerApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/v1/superadmin/' }),
    endpoints: (builder) => ({
        postCustomer: builder.mutation<any, any>({
            query: (newCustomer) => {
                const { token, ...customer } = newCustomer

                return {
                    url: `customers/`,
                    method: "POST",
                    body: customer,
                    headers: {
                        Authorization: `Bearer ${token}`
                    }

                }
            },
        }),
        getCustomers: builder.query<CustomerType[], string>({
            query: (token) => ({
                url: "customers",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        }),
        getCustomerById: builder.query<any, any>({
            query: ({ token, id }) => ({
                url: `customers/${id}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        }),
        patchCustomerStatus: builder.mutation<any, any>({
            query: (data) => {
                const { token, id, isActive } = data
                return {
                    url: `customers/${id}/status`,
                    method: "PATCH",
                    body: { isActive: isActive },
                    headers: {
                        Authorization: `Bearer ${token}`
                    }

                }
            },
        }),
        deleteCustomer: builder.mutation<any, any>({
            query: ({ token, id }) => {
                return {
                    url: `customers/${id}`,
                    method: "DELETE",
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            },
        }),
    }),
})


export const {
    useGetCustomersQuery,
    useGetCustomerByIdQuery,
    usePostCustomerMutation,
    usePatchCustomerStatusMutation,
    useDeleteCustomerMutation,
} = customerApi


