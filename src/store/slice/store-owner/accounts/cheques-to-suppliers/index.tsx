import { ChequeToSupplierType } from "@/utils/types/accounts";
import { PaginationType } from "@/utils/types/pagination";
import { createSlice } from "@reduxjs/toolkit";

interface StateType {
    pagination: PaginationType;
    list: ChequeToSupplierType[];
}

const initialState: StateType = {
    pagination: {
        page: 0,
        totalSize: 0,
        rowsPerPage: 10,
    },
    list: [],
}

export const ChequeToSupplierSlice = createSlice({
    name: "Cheque to Supplier",
    initialState: initialState,
    reducers: {
        getChequeToSupplierList: (state: StateType, action) => {
            state.pagination = action.payload.newPagination
            state.list = action.payload.list
        },
    }
})


export const {
    getChequeToSupplierList,
} = ChequeToSupplierSlice.actions

export default ChequeToSupplierSlice.reducer
