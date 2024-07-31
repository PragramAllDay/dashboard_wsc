import { PaginationType } from "@/utils/types/pagination";
import { WholeSaleInternationalType } from "@/utils/types/shipping";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";


interface StateType {
    pagination: PaginationType;
    list: WholeSaleInternationalType[];
}


const initialState: StateType = {
    pagination: {
        page: 0,
        totalSize: 0,
        rowsPerPage: 10,
    },
    list: [],
}


export const WholeSaleInternationalSlice = createSlice({
    name: "wholesale-international",
    initialState,
    reducers: {
        getWholeSaleInternationalList: (state: StateType, action) => {
            state.list = action.payload.list
            state.pagination = action.payload.newPagination
        },
        deleteWholeSaleInternational: (state: StateType, action) => {
            state.list = state.list.filter((fle) => fle.id !== action.payload)
        },
        updateWholeSaleInternational: (state: StateType, action: PayloadAction<any>) => {
            state.list = state.list.map((fle) =>
                fle.id === action.payload.id
                    ? { ...action.payload }
                    : fle,
            );
        },
        addWholeSaleInternational: (state: StateType, action: PayloadAction<any>) => {
            state.list.push(action.payload)
        },
    }
})


export const {
    getWholeSaleInternationalList,
    updateWholeSaleInternational,
    deleteWholeSaleInternational,
    addWholeSaleInternational,
} = WholeSaleInternationalSlice.actions

export default WholeSaleInternationalSlice.reducer


