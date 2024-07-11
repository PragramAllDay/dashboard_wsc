import { CityType } from "@/utils/types/categories";
import { PaginationType } from "@/utils/types/pagination";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface StateType {
    editCity: boolean;
    cityPagination: PaginationType;
    cityList: CityType[];
}

const initialState = {
    cityList: [],
    cityPagination: {
        page: 0,
        totalSize: 0,
        rowsPerPage: 10,
    },
    editCity: false,
}

export const CitySlice = createSlice({
    name: "City",
    initialState,
    reducers: {
        getCityList: (state: StateType, action) => {
            state.cityList = action.payload.list
            state.cityPagination = action.payload.newPagination
        },
        deleteCityByID: (state: StateType, action) => {
            state.cityList = state.cityList.filter((fle) => fle.id !== action.payload)
        },
        isEdit: (state: StateType) => {
            state.editCity = !state.editCity
        },
        updateCity: (state: StateType, action: PayloadAction<any>) => {
            state.cityList = state.cityList.map((fle) =>
                fle.id === action.payload.id
                    ? { ...action.payload }
                    : fle,
            );
        },
        addCity: (state: StateType, action: PayloadAction<any>) => {
            state.cityList.push(action.payload)
        },
    }
})


export const {
    getCityList,
    updateCity,
    deleteCityByID,
    addCity,
    isEdit,
} = CitySlice.actions

export default CitySlice.reducer
