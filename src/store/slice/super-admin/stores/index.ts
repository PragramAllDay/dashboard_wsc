import { PaginationType } from "@/utils/types/pagination";
import { StoreType } from "@/utils/types/stores";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface StateType {
    editStore: boolean;
    storePagination: PaginationType;
    storeList: StoreType[];
}

const initialState = {
    storeList: [],
    storePagination: {
        page: 0,
        totalSize: 0,
        rowsPerPage: 10,
    },
    editStore: false,
}

export const StoreSlice = createSlice({
    name: "Store",
    initialState,
    reducers: {
        getStoreList: (state: StateType, action) => {
            state.storeList = action.payload.list
            state.storePagination = action.payload.newPagination
        },
        deleteStore: (state: StateType, action) => {
            state.storeList = state.storeList.filter((fle) => fle.id !== action.payload)
        },
        isEdit: (state: StateType) => {
            state.editStore = !state.editStore
        },
        updateStore: (state: StateType, action: PayloadAction<any>) => {
            state.storeList = state.storeList.map((fle) =>
                fle.id === action.payload.id
                    ? { ...action.payload }
                    : fle,
            );
        },
        addStore: (state: StateType, action: PayloadAction<any>) => {
            state.storeList.push(action.payload)
        },
    }
})


export const {
    getStoreList,
    updateStore,
    deleteStore,
    addStore,
    isEdit,
} = StoreSlice.actions

export default StoreSlice.reducer
