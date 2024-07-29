import { PaginationType } from "@/utils/types/pagination";
import { SalesAgentType } from "@/utils/types/sale-agent";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface StateType {
    pagination: PaginationType;
    list: SalesAgentType[];
}

const initialState: StateType = {
    pagination: {
        page: 0,
        totalSize: 0,
        rowsPerPage: 10,
    },
    list: [],
}

export const SalesAgentSlice = createSlice({
    name: "manage-attribute",
    initialState,
    reducers: {
        getSalesAgentList: (state: StateType, action) => {
            state.list = action.payload.list
            state.pagination = action.payload.newPagination
        },
        deleteSalesAgent: (state: StateType, action) => {
            state.list = state.list.filter((fle) => fle.id !== action.payload)
        },
        updateSalesAgent: (state: StateType, action: PayloadAction<any>) => {
            state.list = state.list.map((fle) =>
                fle.id === action.payload.id
                    ? { ...action.payload }
                    : fle,
            );
        },
        addSalesAgent: (state: StateType, action: PayloadAction<any>) => {
            state.list.push(action.payload)
        },
    }
})


export const {
    getSalesAgentList,
    updateSalesAgent,
    deleteSalesAgent,
    addSalesAgent,
} = SalesAgentSlice.actions

export default SalesAgentSlice.reducer
