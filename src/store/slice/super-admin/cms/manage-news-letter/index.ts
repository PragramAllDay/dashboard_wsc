import { PaginationType } from "@/utils/types/pagination";
import { ManageNewsLetterType } from "@/utils/types/cms";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface StateType {
    editManageNewsLetter: boolean;
    manageNewsLetterPagination: PaginationType;
    manageNewsLetterList: ManageNewsLetterType[];
}

const initialState = {
    manageNewsLetterList: [],
    manageNewsLetterPagination: {
        page: 0,
        totalSize: 0,
        rowsPerPage: 10,
    },
    editManageNewsLetter: false,
}

export const ManageNewsLetterSlice = createSlice({
    name: "manage-news-letter",
    initialState,
    reducers: {
        getManageNewsLetterList: (state: StateType, action) => {
            state.manageNewsLetterList = action.payload.list
            state.manageNewsLetterPagination = action.payload.newPagination
        },
        deleteManageNewsLetter: (state: StateType, action) => {
            state.manageNewsLetterList = state.manageNewsLetterList.filter((fle) => fle.id !== action.payload)
        },
        isEdit: (state: StateType) => {
            state.editManageNewsLetter = !state.editManageNewsLetter
        },
        updateManageNewsLetter: (state: StateType, action: PayloadAction<any>) => {
            state.manageNewsLetterList = state.manageNewsLetterList.map((fle) =>
                fle.id === action.payload.id
                    ? { ...action.payload }
                    : fle,
            );
        },
        addManageNewsLetter: (state: StateType, action: PayloadAction<any>) => {
            state.manageNewsLetterList.push(action.payload)
        },
    }
})


export const {
    getManageNewsLetterList,
    updateManageNewsLetter,
    deleteManageNewsLetter,
    addManageNewsLetter,
    isEdit,
} = ManageNewsLetterSlice.actions

export default ManageNewsLetterSlice.reducer
