import { StoreBannerType } from "@/utils/types/cms";
import { PaginationType } from "@/utils/types/pagination";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface StateType {
    pagination: PaginationType;
    list: StoreBannerType[];
}

const initialState: StateType = {
    pagination: {
        page: 0,
        totalSize: 0,
        rowsPerPage: 10,
    },
    list: [],
}

export const StoreBannerSlice = createSlice({
    name: "manage-attribute",
    initialState,
    reducers: {
        getStoreBannerList: (state: StateType, action) => {
            state.list = action.payload.list
            state.pagination = action.payload.newPagination
        },
        deleteStoreBanner: (state: StateType, action) => {
            state.list = state.list.filter((fle) => fle.id !== action.payload)
        },
        updateStoreBanner: (state: StateType, action: PayloadAction<any>) => {
            state.list = state.list.map((fle) =>
                fle.id === action.payload.id
                    ? { ...action.payload }
                    : fle,
            );
        },
        addStoreBanner: (state: StateType, action: PayloadAction<any>) => {
            state.list.push(action.payload)
        },
    }
})


export const {
    getStoreBannerList,
    updateStoreBanner,
    deleteStoreBanner,
    addStoreBanner,
} = StoreBannerSlice.actions

export default StoreBannerSlice.reducer
