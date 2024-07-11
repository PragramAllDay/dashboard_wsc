import { CountryType } from "@/utils/types/categories";
import { PaginationType } from "@/utils/types/pagination";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface StateType {
    editCountry: boolean;
    countryPagination: PaginationType;
    countryList: CountryType[];
}

const initialState = {
    countryList: [],
    countryPagination: {
        page: 0,
        totalSize: 0,
        rowsPerPage: 10,
    },
    editCountry: false,
}

export const CountrySlice = createSlice({
    name: "Country",
    initialState,
    reducers: {
        getCountryList: (state: StateType, action) => {
            state.countryList = action.payload.list
            state.countryPagination = action.payload.newPagination
        },
        deleteCountryById: (state: StateType, action) => {
            state.countryList = state.countryList.filter((fle) => fle.id !== action.payload)
        },
        isEdit: (state: StateType) => {
            state.editCountry = !state.editCountry
        },
        updateCountry: (state: StateType, action: PayloadAction<any>) => {
            state.countryList = state.countryList.map((fle) =>
                fle.id === action.payload.id
                    ? { ...action.payload }
                    : fle,
            );
        },
        addCountry: (state: StateType, action: PayloadAction<any>) => {
            state.countryList.push(action.payload)
        },
    }
})


export const {
    getCountryList,
    updateCountry,
    deleteCountryById,
    addCountry,
    isEdit,
} = CountrySlice.actions

export default CountrySlice.reducer
