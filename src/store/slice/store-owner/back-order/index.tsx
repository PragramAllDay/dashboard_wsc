import { PaginationType } from "@/utils/types/pagination";
import { BackOrderType } from "@/utils/types/web-order";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface StateType {
    pagination: PaginationType;
    list: BackOrderType[];
}

const initialState = {
    list: [],
    pagination: {
        page: 0,
        totalSize: 0,
        rowsPerPage: 10,
    },
    editBackOrder: false,
}

export const BackOrderSlice = createSlice({
    name: "Back Order",
    initialState,
    reducers: {
        getBackOrderList: (state: StateType, action) => {
            state.list = action.payload.list
            state.pagination = action.payload.newPagination
        },
        deleteBackOrderOnID: (state: StateType, action) => {
            state.list = state.list.filter((fle) => fle.id !== action.payload)
        },
        updateBackOrder: (state: StateType, action: PayloadAction<any>) => {
            state.list = state.list.map((fle) =>
                fle.id === action.payload.id
                    ? { ...action.payload }
                    : fle,
            );
        },
        addBackOrder: (state: StateType, action: PayloadAction<any>) => {
            state.list.push(action.payload)
        },
    }
})


export const {
    getBackOrderList,
    updateBackOrder,
    deleteBackOrderOnID,
    addBackOrder,
} = BackOrderSlice.actions

export default BackOrderSlice.reducer
