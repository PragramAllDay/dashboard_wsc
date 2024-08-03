import { PaginationType } from "@/utils/types/pagination";
import { MonthWiseSaleType, OrderType } from "@/utils/types/sale-and-order";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface StateType {
    pagination: PaginationType;
    list: MonthWiseSaleType[];
}

const initialState: StateType = {
    pagination: {
        page: 0,
        totalSize: 0,
        rowsPerPage: 10,
    },
    list: [],
}

export const MonthWiseSaleSlice = createSlice({
    name: "month-wise-sale",
    initialState,
    reducers: {
        getMonthWiseSaleList: (state: StateType, action) => {
            state.list = action.payload.list
            state.pagination = action.payload.newPagination
        },
        deleteMonthWiseSale: (state: StateType, action) => {
            state.list = state.list.filter((fle) => fle.id !== action.payload)
        },
        updateMonthWiseSale: (state: StateType, action: PayloadAction<any>) => {
            state.list = state.list.map((fle) =>
                fle.id === action.payload.id
                    ? { ...action.payload }
                    : fle,
            );
        },
        addMonthWiseSale: (state: StateType, action: PayloadAction<any>) => {
            state.list.push(action.payload)
        },
    }
})


export const {
    getMonthWiseSaleList,
    updateMonthWiseSale,
    deleteMonthWiseSale,
    addMonthWiseSale,
} = MonthWiseSaleSlice.actions

export default MonthWiseSaleSlice.reducer


