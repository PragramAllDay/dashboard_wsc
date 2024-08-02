import { CashRegistryType } from "@/utils/types/accounts";
import { PaginationType } from "@/utils/types/pagination";
import { createSlice } from "@reduxjs/toolkit";

interface StateType {
    pagination: PaginationType;
    list: CashRegistryType[];
}

const initialState: StateType = {
    pagination: {
        page: 0,
        totalSize: 0,
        rowsPerPage: 10,
    },
    list: [],
}

export const CashRegistrySlice = createSlice({
    name: "Cash Registry",
    initialState: initialState,
    reducers: {
        getCashRegistryList: (state: StateType, action) => {
            state.pagination = action.payload.newPagination
            state.list = action.payload.list
        },
    }
})


export const {
    getCashRegistryList,
} = CashRegistrySlice.actions

export default CashRegistrySlice.reducer
