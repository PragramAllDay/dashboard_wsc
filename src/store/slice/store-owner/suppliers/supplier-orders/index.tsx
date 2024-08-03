import { PaginationType } from "@/utils/types/pagination";
import { SupplierOrderType } from "@/utils/types/supplier";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface StateType {
    pagination: PaginationType;
    list: SupplierOrderType[];
}

const initialState: StateType = {
    pagination: {
        page: 0,
        totalSize: 0,
        rowsPerPage: 10,
    },
    list: [],
}

export const SupplierOrderSlice = createSlice({
    name: "supplier-order",
    initialState,
    reducers: {
        getSupplierOrderList: (state: StateType, action) => {
            state.list = action.payload.list
            state.pagination = action.payload.newPagination
        },
        deleteSupplierOrder: (state: StateType, action) => {
            state.list = state.list.filter((fle) => fle.id !== action.payload)
        },
        updateSupplierOrder: (state: StateType, action: PayloadAction<any>) => {
            state.list = state.list.map((fle) =>
                fle.id === action.payload.id
                    ? { ...action.payload }
                    : fle,
            );
        },
        addSupplierOrder: (state: StateType, action: PayloadAction<any>) => {
            state.list.push(action.payload)
        },
    }
})


export const {
    getSupplierOrderList,
    updateSupplierOrder,
    deleteSupplierOrder,
    addSupplierOrder,
} = SupplierOrderSlice.actions

export default SupplierOrderSlice.reducer
