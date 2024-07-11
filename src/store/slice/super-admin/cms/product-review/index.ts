import { PaginationType } from "@/utils/types/pagination";
import { ProductReviewType } from "@/utils/types/cms";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface StateType {
    editProductReview: boolean;
    ProductReviewPagination: PaginationType;
    ProductReviewList: ProductReviewType[];
}

const initialState = {
    ProductReviewList: [],
    ProductReviewPagination: {
        page: 0,
        totalSize: 0,
        rowsPerPage: 10,
    },
    editProductReview: false,
}

export const ProductReviewSlice = createSlice({
    name: "ProductReview",
    initialState,
    reducers: {
        getProductReviewList: (state: StateType, action) => {
            state.ProductReviewList = action.payload.list
            state.ProductReviewPagination = action.payload.newPagination
        },
        deleteProductReview: (state: StateType, action) => {
            state.ProductReviewList = state.ProductReviewList.filter((fle) => fle.id !== action.payload)
        },
        isEdit: (state: StateType) => {
            state.editProductReview = !state.editProductReview
        },
        updateProductReview: (state: StateType, action: PayloadAction<any>) => {
            state.ProductReviewList = state.ProductReviewList.map((fle) =>
                fle.id === action.payload.id
                    ? { ...action.payload }
                    : fle,
            );
        },
        addProductReview: (state: StateType, action: PayloadAction<any>) => {
            state.ProductReviewList.push(action.payload)
        },
    }
})


export const {
    getProductReviewList,
    updateProductReview,
    deleteProductReview,
    addProductReview,
    isEdit,
} = ProductReviewSlice.actions

export default ProductReviewSlice.reducer
