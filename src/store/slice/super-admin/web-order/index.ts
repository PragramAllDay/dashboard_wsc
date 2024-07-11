import { PaginationType } from "@/utils/types/pagination";
import { WebOrderType } from "@/utils/types/web-order";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface StateType {
    editWebOrder: boolean;
    webOrderPagination: PaginationType;
    webOrderList: WebOrderType[];
}

const initialState = {
    webOrderList: [],
    webOrderPagination: {
        page: 0,
        totalSize: 0,
        rowsPerPage: 10,
    },
    editWebOrder: false,
}

export const WebOrderSlice = createSlice({
    name: "WebOrder",
    initialState,
    reducers: {
        getWebOrderList: (state: StateType, action) => {
            state.webOrderList = action.payload.list
            state.webOrderPagination = action.payload.newPagination
        },
        deleteWebOrder: (state: StateType, action) => {
            state.webOrderList = state.webOrderList.filter((fle) => fle.id !== action.payload)
        },
        isEdit: (state: StateType) => {
            state.editWebOrder = !state.editWebOrder
        },
        updateWebOrder: (state: StateType, action: PayloadAction<any>) => {
            state.webOrderList = state.webOrderList.map((fle) =>
                fle.id === action.payload.id
                    ? { ...action.payload }
                    : fle,
            );
        },
        addWebOrder: (state: StateType, action: PayloadAction<any>) => {
            state.webOrderList.push(action.payload)
        },
    }
})


export const {
    getWebOrderList,
    updateWebOrder,
    deleteWebOrder,
    addWebOrder,
    isEdit,
} = WebOrderSlice.actions

export default WebOrderSlice.reducer
