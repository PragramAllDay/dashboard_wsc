import { ManagePagesType } from "@/utils/types/cms";
import { PaginationType } from "@/utils/types/pagination";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface StateType {
    pagination: PaginationType;
    list: ManagePagesType[];
}

const initialState: StateType = {
    pagination: {
        page: 0,
        totalSize: 0,
        rowsPerPage: 10,
    },
    list: [],
}

export const ManagePagesSlice = createSlice({
    name: "manage-attribute",
    initialState,
    reducers: {
        getManagePagesList: (state: StateType, action) => {
            state.list = action.payload.list
            state.pagination = action.payload.newPagination
        },
        deleteManagePages: (state: StateType, action) => {
            state.list = state.list.filter((fle) => fle.id !== action.payload)
        },
        updateManagePages: (state: StateType, action: PayloadAction<any>) => {
            state.list = state.list.map((fle) =>
                fle.id === action.payload.id
                    ? { ...action.payload }
                    : fle,
            );
        },
        addManagePages: (state: StateType, action: PayloadAction<any>) => {
            state.list.push(action.payload)
        },
    }
})


export const {
    getManagePagesList,
    updateManagePages,
    deleteManagePages,
    addManagePages,
} = ManagePagesSlice.actions

export default ManagePagesSlice.reducer
