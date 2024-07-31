import { ManageGalleriesType } from "@/utils/types/cms";
import { PaginationType } from "@/utils/types/pagination";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface StateType {
    pagination: PaginationType;
    list: ManageGalleriesType[];
}

const initialState: StateType = {
    pagination: {
        page: 0,
        totalSize: 0,
        rowsPerPage: 10,
    },
    list: [],
}

export const ManageGalleriesSlice = createSlice({
    name: "manage-attribute",
    initialState,
    reducers: {
        getManageGalleriesList: (state: StateType, action) => {
            state.list = action.payload.list
            state.pagination = action.payload.newPagination
        },
        deleteManageGalleries: (state: StateType, action) => {
            state.list = state.list.filter((fle) => fle.id !== action.payload)
        },
        updateManageGalleries: (state: StateType, action: PayloadAction<any>) => {
            state.list = state.list.map((fle) =>
                fle.id === action.payload.id
                    ? { ...action.payload }
                    : fle,
            );
        },
        addManageGalleries: (state: StateType, action: PayloadAction<any>) => {
            state.list.push(action.payload)
        },
    }
})


export const {
    getManageGalleriesList,
    updateManageGalleries,
    deleteManageGalleries,
    addManageGalleries,
} = ManageGalleriesSlice.actions

export default ManageGalleriesSlice.reducer
