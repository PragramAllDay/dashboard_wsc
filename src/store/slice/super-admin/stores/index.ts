import { initialSliceStoreState } from "@/utils/data/initial-state/super-admin";
import { PaginationType } from "@/utils/types/pagination";
import { StoreStateType, StoreType } from "@/utils/types/stores";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


export const StoreSlice = createSlice({
    name: "stores",
    initialState: initialSliceStoreState,
    reducers: {
        getStoreList: (state: StoreStateType, action: PayloadAction<{ list: StoreType[], newPagination: PaginationType }>) => {
            state.storeList = action.payload.list
            state.storePagination = action.payload.newPagination
        },
        deleteStore: (state: StoreStateType, action: PayloadAction<string>) => {
            state.storeList = state.storeList.filter((fle) => fle.id !== action.payload)
        },
        updateStore: (state: StoreStateType, action: PayloadAction<any>) => {
            state.storeList = state.storeList.map((fle) =>
                fle.id === action.payload.id
                    ? { ...action.payload }
                    : fle,
            );
        },
        addStore: (state: StoreStateType, action: PayloadAction<any>) => {
            state.storeList.push(action.payload)
        },
    }
})


export const {
    getStoreList,
    updateStore,
    deleteStore,
    addStore,
} = StoreSlice.actions

export default StoreSlice.reducer



