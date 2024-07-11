import { AbandonedCartType } from "@/utils/types/cms";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface StateType {
    editAbandonedCart: boolean;
    abandonedCartPagination: any;
    abandonedCarts: AbandonedCartType[];
}

const initialState = {
    abandonedCarts: [],
    abandonedCartPagination: {
        page: 0,
        totalSize: 0,
        rowsPerPage: 10,
    },
    editAbandonedCart: false,
}

export const AbandonedCartSlice = createSlice({
    name: "Abandoned Cart",
    initialState,
    reducers: {
        getAbandonedCartList: (state: StateType, action) => {
            state.abandonedCarts = action.payload.list
            state.abandonedCartPagination = action.payload.newPagination
        },
        deleteAbandonedCart: (state: StateType, action) => {
            state.abandonedCarts = state.abandonedCarts.filter((fle) => fle.id !== action.payload)
        },
        isEdit: (state: StateType) => {
            state.editAbandonedCart = !state.editAbandonedCart
        },
        updateAbandonedCart: (state: StateType, action: PayloadAction<any>) => {
            state.abandonedCarts = state.abandonedCarts.map((fle) =>
                fle.id === action.payload.id
                    ? { ...action.payload }
                    : fle,
            );
        },
        addAbandonedCart: (state: StateType, action: PayloadAction<any>) => {
            state.abandonedCarts.push(action.payload)
        },
    }
})


export const {
    getAbandonedCartList,
    updateAbandonedCart,
    deleteAbandonedCart,
    addAbandonedCart,
    isEdit,
} = AbandonedCartSlice.actions

export default AbandonedCartSlice.reducer
