import { PaginationType } from "@/utils/types/pagination";
import { SupplierType } from "@/utils/types/shipping";
import { createSlice } from "@reduxjs/toolkit";

interface StateType {
    pagination: PaginationType;
    list: SupplierType[];
}

const initialState: StateType = {
    pagination: {
        page: 0,
        totalSize: 0,
        rowsPerPage: 10,
    },
    list: [],
}

export const SupplierSlice = createSlice({
    name: "Supplier",
    initialState,
    reducers: {
        getSupplierList: (state: StateType, action) => {
            state.pagination = action.payload.newPagination
            state.list = action.payload.list
        },
    }
})


export const {
    getSupplierList,
} = SupplierSlice.actions

export default SupplierSlice.reducer
