import { PaginationType } from "@/utils/types/pagination";
import { CustomerType } from "@/utils/types/stores";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface StateType {
    editCustomer: boolean;
    customerPagination: PaginationType;
    customerList: CustomerType[];
}

const initialState = {
    customerList: [],
    customerPagination: {
        page: 0,
        totalSize: 0,
        rowsPerPage: 10,
    },
    editCustomer: false,
}

export const CustomerSlice = createSlice({
    name: "Customer",
    initialState,
    reducers: {
        getCustomerList: (state: StateType, action) => {
            state.customerList = action.payload.list
            state.customerPagination = action.payload.newPagination
        },
        deleteCustomerOnID: (state: StateType, action) => {
            state.customerList = state.customerList.filter((fle) => fle.id !== action.payload)
        },
        isEdit: (state: StateType) => {
            state.editCustomer = !state.editCustomer
        },
        updateCustomer: (state: StateType, action: PayloadAction<any>) => {
            state.customerList = state.customerList.map((fle) =>
                fle.id === action.payload.id
                    ? { ...action.payload }
                    : fle,
            );
        },
        addCustomer: (state: StateType, action: PayloadAction<any>) => {
            state.customerList.push(action.payload)
        },
    }
})


export const {
    getCustomerList,
    updateCustomer,
    deleteCustomerOnID,
    addCustomer,
    isEdit,
} = CustomerSlice.actions

export default CustomerSlice.reducer
