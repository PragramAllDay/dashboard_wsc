import { PaginationType } from "@/utils/types/pagination";
import { BadDebtsType } from "@/utils/types/sale-and-order";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface StateType {
    pagination: PaginationType;
    list: BadDebtsType[];
}

const initialState: StateType = {
    pagination: {
        page: 0,
        totalSize: 0,
        rowsPerPage: 10,
    },
    list: [],
}

export const BadDebtSlice = createSlice({
    name: "bad-debt",
    initialState,
    reducers: {
        getBadDebtList: (state: StateType, action) => {
            state.list = action.payload.list
            state.pagination = action.payload.newPagination
        },
        deleteBadDebt: (state: StateType, action) => {
            state.list = state.list.filter((fle) => fle.id !== action.payload)
        },
        updateBadDebt: (state: StateType, action: PayloadAction<any>) => {
            state.list = state.list.map((fle) =>
                fle.id === action.payload.id
                    ? { ...action.payload }
                    : fle,
            );
        },
        addBadDebt: (state: StateType, action: PayloadAction<any>) => {
            state.list.push(action.payload)
        },
    }
})


export const {
    getBadDebtList,
    updateBadDebt,
    deleteBadDebt,
    addBadDebt,
} = BadDebtSlice.actions

export default BadDebtSlice.reducer
