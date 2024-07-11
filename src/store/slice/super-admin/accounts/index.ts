import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface StateType {
    editAccounts: boolean;
    accountsPagination: any;
    accounts: any[];
}

const initialState = {
    accounts: [],
    accountsPagination: {
        page: 0,
        totalSize: 0,
        rowsPerPage: 10,
    },
    editAccounts: false,
}

export const AccountsSlice = createSlice({
    name: "accounts",
    initialState,
    reducers: {
        getAccountsList: (state: StateType, action) => {
            state.accounts = action.payload.list
            state.accountsPagination = action.payload.newPagination
        },
        deleteAccounts: (state: StateType, action) => {
            state.accounts = state.accounts.filter((fle) => fle.id !== action.payload)
        },
        isEdit: (state: StateType) => {
            state.editAccounts = !state.editAccounts
        },
        updateAccounts: (state: StateType, action: PayloadAction<any>) => {
            state.accounts = state.accounts.map((fle) =>
                fle.id === action.payload.id
                    ? { ...action.payload }
                    : fle,
            );
        },
        addAccounts: (state: StateType, action: PayloadAction<any>) => {
            state.accounts.push(action.payload)
        },
    }
})


export const {
    getAccountsList,
    updateAccounts,
    deleteAccounts,
    addAccounts,
    isEdit,
} = AccountsSlice.actions

export default AccountsSlice.reducer
