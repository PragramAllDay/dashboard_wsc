import { ManageAttributeType } from "@/utils/types/catalog";
import { PaginationType } from "@/utils/types/pagination";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface StateType {
    pagination: PaginationType;
    list: ManageAttributeType[];
}

const initialState: StateType = {
    pagination: {
        page: 0,
        totalSize: 0,
        rowsPerPage: 10,
    },
    list: [],
}

export const ManageAttributeSlice = createSlice({
    name: "manage-attribute",
    initialState,
    reducers: {
        getManageAttributeList: (state: StateType, action) => {
            state.list = action.payload.list
            state.pagination = action.payload.newPagination
        },
        deleteManageAttribute: (state: StateType, action) => {
            state.list = state.list.filter((fle) => fle.id !== action.payload)
        },
        updateManageAttribute: (state: StateType, action: PayloadAction<any>) => {
            state.list = state.list.map((fle) =>
                fle.id === action.payload.id
                    ? { ...action.payload }
                    : fle,
            );
        },
        addManageAttribute: (state: StateType, action: PayloadAction<any>) => {
            state.list.push(action.payload)
        },
    }
})


export const {
    getManageAttributeList,
    updateManageAttribute,
    deleteManageAttribute,
    addManageAttribute,
} = ManageAttributeSlice.actions

export default ManageAttributeSlice.reducer
