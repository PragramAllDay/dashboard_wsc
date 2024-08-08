import { AccountCreditNoteType, AccountSaleReportType, AccountSaleSummaryType, HomePageSettingType } from "@/utils/types/cms";
import { PaginationType } from "@/utils/types/pagination";
import { createSlice } from "@reduxjs/toolkit";

interface StateType {
    accountSaleSummaryPagination: PaginationType;
    accountSaleReportPagination: PaginationType;
    accountCreditNotePagination: PaginationType;

    accountSaleSummaryList: AccountSaleSummaryType[];
    accountSaleReportList: AccountSaleReportType[];
    accountCreditNoteList: AccountCreditNoteType[];
}

const initialState: StateType = {
    accountSaleSummaryPagination: {
        page: 0,
        totalSize: 0,
        rowsPerPage: 10,
    },
    accountSaleReportPagination: {
        page: 0,
        totalSize: 0,
        rowsPerPage: 10,
    },
    accountCreditNotePagination: {
        page: 0,
        totalSize: 0,
        rowsPerPage: 10,
    },
    accountSaleSummaryList: [],
    accountSaleReportList: [],
    accountCreditNoteList: [],
}

export const WebSaleReportSlice = createSlice({
    name: "web-sale-report",
    initialState,
    reducers: {
        getAccountSaleSummaryList: (state: StateType, action) => {
            state.accountSaleSummaryList = action.payload.list
            state.accountSaleSummaryPagination = action.payload.newPagination
        },
        getAccountSaleReportList: (state: StateType, action) => {
            state.accountSaleReportList = action.payload.list
            state.accountSaleReportPagination = action.payload.newPagination
        },
        getAccountCreditNoteList: (state: StateType, action) => {
            state.accountCreditNoteList = action.payload.list
            state.accountCreditNotePagination = action.payload.newPagination
        },
    }
})


export const {
    getAccountSaleSummaryList,
    getAccountSaleReportList,
    getAccountCreditNoteList,
} = WebSaleReportSlice.actions

export default WebSaleReportSlice.reducer



