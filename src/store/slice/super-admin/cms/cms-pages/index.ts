import { PaginationType } from "@/utils/types/pagination";
import { CMSPagesType } from "@/utils/types/cms";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface StateType {
    editCmsPages: boolean;
    cmsPagesPagination: PaginationType;
    cmsPagesList: CMSPagesType[];
}

const initialState = {
    cmsPagesList: [],
    cmsPagesPagination: {
        page: 0,
        totalSize: 0,
        rowsPerPage: 10,
    },
    editCmsPages: false,
}

export const cmsPagesSlice = createSlice({
    name: "cms-pages",
    initialState,
    reducers: {
        getCmsPagesList: (state: StateType, action) => {
            state.cmsPagesList = action.payload.list
            state.cmsPagesPagination = action.payload.newPagination
        },
        deleteCmsPages: (state: StateType, action) => {
            state.cmsPagesList = state.cmsPagesList.filter((fle) => fle.id !== action.payload)
        },
        isEdit: (state: StateType) => {
            state.editCmsPages = !state.editCmsPages
        },
        updateCmsPages: (state: StateType, action: PayloadAction<any>) => {
            state.cmsPagesList = state.cmsPagesList.map((fle) =>
                fle.id === action.payload.id
                    ? { ...action.payload }
                    : fle,
            );
        },
        addCmsPages: (state: StateType, action: PayloadAction<any>) => {
            state.cmsPagesList.push(action.payload)
        },
    }
})


export const {
    getCmsPagesList,
    updateCmsPages,
    deleteCmsPages,
    addCmsPages,
    isEdit,
} = cmsPagesSlice.actions

export default cmsPagesSlice.reducer
