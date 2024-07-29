import { ManageCategoryType } from "@/utils/types/catalog";
import { PaginationType } from "@/utils/types/pagination";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface StateType {
    pagination: PaginationType;
    list: ManageCategoryType[];
}

const initialState = {
    pagination: {
        page: 0,
        totalSize: 0,
        rowsPerPage: 10,
    },
    list: [],
}

export const ManageCategorySlice = createSlice({
    name: "manage-category",
    initialState,
    reducers: {
        getManageCategoryList: (state: StateType, action) => {
            state.list = action.payload.list
            state.pagination = action.payload.newPagination
        },
        deleteManageCategory: (state: StateType, action) => {
            state.list = state.list.filter((fle) => fle.id !== action.payload)
        },
        updateManageCategory: (state: StateType, action: PayloadAction<any>) => {
            state.list = state.list.map((fle) =>
                fle.id === action.payload.id
                    ? { ...action.payload }
                    : fle,
            );
        },
        addManageCategory: (state: StateType, action: PayloadAction<any>) => {
            state.list.push(action.payload)
        },
    }
})


export const {
    getManageCategoryList,
    updateManageCategory,
    deleteManageCategory,
    addManageCategory,
} = ManageCategorySlice.actions

export default ManageCategorySlice.reducer
