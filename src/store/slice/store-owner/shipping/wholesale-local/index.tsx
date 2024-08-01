import { PaginationType } from "@/utils/types/pagination";
import { WholeSaleLocalType } from "@/utils/types/shipping";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";


interface StateType {
    pagination: PaginationType;
    list: WholeSaleLocalType[];
}


const initialState: StateType = {
    pagination: {
        page: 0,
        totalSize: 0,
        rowsPerPage: 10,
    },
    list: [],
}


export const WholeSaleLocalSlice = createSlice({
    name: "whole-sale-local",
    initialState,
    reducers: {
        getWholeSaleLocalList: (state: StateType, action) => {
            state.list = action.payload.list
            state.pagination = action.payload.newPagination
        },
        deleteWholeSaleLocal: (state: StateType, action) => {
            state.list = state.list.filter((fle) => fle.id !== action.payload)
        },
        updateWholeSaleLocal: (state: StateType, action: PayloadAction<any>) => {
            state.list = state.list.map((fle) =>
                fle.id === action.payload.id
                    ? { ...action.payload }
                    : fle,
            );
        },
        addWholeSaleLocal: (state: StateType, action: PayloadAction<any>) => {
            state.list.push(action.payload)
        },
    }
})


export const {
    getWholeSaleLocalList,
    updateWholeSaleLocal,
    deleteWholeSaleLocal,
    addWholeSaleLocal,
} = WholeSaleLocalSlice.actions

export default WholeSaleLocalSlice.reducer


