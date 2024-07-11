import { ProductReviewType } from '@/utils/types/cms'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const productReviewApi = createApi({
    reducerPath: 'productReviewApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    endpoints: (builder) => ({
        getProductReview: builder.query<ProductReviewType[], void>({
            query: () => "product-review",
        }),
        postProductReview: builder.mutation<ProductReviewType, ProductReviewType>({
            query: (newProductReview) => {
                return {
                    url: `product-review`,
                    method: "POST",
                    body: newProductReview,
                }
            },
        }),
        patchProductReview: builder.mutation<ProductReviewType, ProductReviewType>({
            query: (updateProductReview) => {
                return {
                    url: `product-review/${updateProductReview.id}`,
                    method: "PATCH",
                    body: updateProductReview,
                }
            },
        }),
        deleteProductReview: builder.mutation<ProductReviewType, string>({
            query: (id) => {
                return {
                    url: `product-review/${id}`,
                    method: "DELETE",
                }
            },
        }),
    }),
})


export const {
    useGetProductReviewQuery,
    usePostProductReviewMutation,
    usePatchProductReviewMutation,
    useDeleteProductReviewMutation
} = productReviewApi


