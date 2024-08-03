import { PaginationType } from "@/utils/types/pagination";
import { OrderType } from "@/utils/types/sale-and-order";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface StateType {
    pagination: PaginationType;
    list: OrderType[];
}

const initialState: StateType = {
    pagination: {
        page: 0,
        totalSize: 0,
        rowsPerPage: 10,
    },
    list: [],
}

export const CashAndCarryOrderSlice = createSlice({
    name: "cash-and-carry-order",
    initialState,
    reducers: {
        getCashAndCarryOrderList: (state: StateType, action) => {
            state.list = action.payload.list
            state.pagination = action.payload.newPagination
        },
        deleteCashAndCarryOrder: (state: StateType, action) => {
            state.list = state.list.filter((fle) => fle.id !== action.payload)
        },
        updateCashAndCarryOrder: (state: StateType, action: PayloadAction<any>) => {
            state.list = state.list.map((fle) =>
                fle.id === action.payload.id
                    ? { ...action.payload }
                    : fle,
            );
        },
        addCashAndCarryOrder: (state: StateType, action: PayloadAction<any>) => {
            state.list.push(action.payload)
        },
    }
})


export const {
    getCashAndCarryOrderList,
    updateCashAndCarryOrder,
    deleteCashAndCarryOrder,
    addCashAndCarryOrder,
} = CashAndCarryOrderSlice.actions

export default CashAndCarryOrderSlice.reducer


