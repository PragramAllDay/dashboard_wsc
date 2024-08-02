import { ReceiptType } from "@/utils/types/accounts";
import { PaginationType } from "@/utils/types/pagination";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface StateType {
    pagination: PaginationType;
    list: ReceiptType[];
}

const initialState: StateType = {
    pagination: {
        page: 0,
        totalSize: 0,
        rowsPerPage: 10,
    },
    list: [],
}

export const ReceiptsSlice = createSlice({
    name: "manage-attribute",
    initialState,
    reducers: {
        getReceiptsList: (state: StateType, action) => {
            state.pagination = action.payload.newPagination
            state.list = action.payload.list
        },
        deleteReceipts: (state: StateType, action) => {
            state.list = state.list.filter((fle) => fle.id !== action.payload)
        },
        updateReceipts: (state: StateType, action: PayloadAction<any>) => {
            state.list = state.list.map((fle) =>
                fle.id === action.payload.id
                    ? { ...action.payload }
                    : fle,
            );
        },
        addReceipts: (state: StateType, action: PayloadAction<any>) => {
            state.list.push(action.payload)
        },
    }
})


export const {
    getReceiptsList,
    updateReceipts,
    deleteReceipts,
    addReceipts,
} = ReceiptsSlice.actions

export default ReceiptsSlice.reducer
