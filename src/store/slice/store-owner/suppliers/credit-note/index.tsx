import { PaginationType } from "@/utils/types/pagination";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CreditNoteType } from "@/utils/types/supplier";
import { createSlice } from "@reduxjs/toolkit";

interface StateType {
    pagination: PaginationType;
    list: CreditNoteType[];
}

const initialState = {
    pagination: {
        page: 0,
        totalSize: 0,
        rowsPerPage: 10,
    },
    list: [],
}

export const CreditNoteSlice = createSlice({
    name: "CreditNote",
    initialState,
    reducers: {
        getCreditNoteList: (state: StateType, action) => {
            state.list = action.payload.list
            state.pagination = action.payload.newPagination
        },
        deleteCreditNote: (state: StateType, action) => {
            state.list = state.list.filter((fle) => fle.id !== action.payload)
        },
        updateCreditNote: (state: StateType, action: PayloadAction<any>) => {
            state.list = state.list.map((fle) =>
                fle.id === action.payload.id
                    ? { ...action.payload }
                    : fle,
            );
        },
        addCreditNote: (state: StateType, action: PayloadAction<any>) => {
            state.list.push(action.payload)
        },
    }
})


export const {
    getCreditNoteList,
    updateCreditNote,
    deleteCreditNote,
    addCreditNote,
} = CreditNoteSlice.actions

export default CreditNoteSlice.reducer
