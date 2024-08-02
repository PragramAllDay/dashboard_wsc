import { PaginationType } from "@/utils/types/pagination";
import { ManageNewsLetterType } from "@/utils/types/cms";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface StateType {
    list: ManageNewsLetterType[];
    pagination: PaginationType;
}

const initialState: StateType = {
    list: [],
    pagination: {
        page: 0,
        totalSize: 0,
        rowsPerPage: 10,
    },
}

export const ManageNewsLetterSlice = createSlice({
    name: "manage-news-letter",
    initialState,
    reducers: {
        getManageNewsLetterList: (state: StateType, action) => {
            state.list = action.payload.list
            state.pagination = action.payload.newPagination
        },
        deleteManageNewsLetter: (state: StateType, action) => {
            state.list = state.list.filter((fle) => fle.id !== action.payload)
        },
        updateManageNewsLetter: (state: StateType, action: PayloadAction<any>) => {
            state.list = state.list.map((fle) =>
                fle.id === action.payload.id
                    ? { ...action.payload }
                    : fle,
            );
        },
        addManageNewsLetter: (state: StateType, action: PayloadAction<any>) => {
            state.list.push(action.payload)
        },
    }
})


export const {
    getManageNewsLetterList,
    updateManageNewsLetter,
    deleteManageNewsLetter,
    addManageNewsLetter,
} = ManageNewsLetterSlice.actions

export default ManageNewsLetterSlice.reducer


