import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PaginationType } from "@/utils/types/pagination";
import { InvoicesType } from "@/utils/types/supplier";

interface StateType {
    pagination: PaginationType;
    list: InvoicesType[];
}

const initialState: StateType = {
    pagination: {
        page: 0,
        totalSize: 0,
        rowsPerPage: 10,
    },
    list: [],
}

export const InvoicesSlice = createSlice({
    name: "Invoices",
    initialState,
    reducers: {
        getInvoiceList: (state: StateType, action) => {
            state.pagination = action.payload.newPagination
            state.list = action.payload.list
        },
        deleteInvoice: (state: StateType, action) => {
            state.list = state.list.filter((fle) => fle.id !== action.payload)
        },
        updateInvoice: (state: StateType, action: PayloadAction<any>) => {
            state.list = state.list.map((fle) =>
                fle.id === action.payload.id
                    ? { ...action.payload }
                    : fle,
            );
        },
        addInvoice: (state: StateType, action: PayloadAction<any>) => {
            state.list.push(action.payload)
        },
    }
})


export const {
    getInvoiceList,
    deleteInvoice,
    updateInvoice,
    addInvoice,
} = InvoicesSlice.actions

export default InvoicesSlice.reducer
