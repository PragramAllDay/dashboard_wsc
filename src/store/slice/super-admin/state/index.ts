import { StateType } from "@/utils/types/categories";
import { PaginationType } from "@/utils/types/pagination";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CountryStateType {
    editState: boolean;
    statePagination: PaginationType;
    stateList: StateType[];
}

const initialState = {
    stateList: [],
    statePagination: {
        page: 0,
        totalSize: 0,
        rowsPerPage: 10,
    },
    editState: false,
}

export const StateSlice = createSlice({
    name: "State",
    initialState,
    reducers: {
        getStateList: (state: CountryStateType, action) => {
            state.stateList = action.payload.list
            state.statePagination = action.payload.newPagination
        },
        deleteStateByID: (state: CountryStateType, action) => {
            state.stateList = state.stateList.filter((fle) => fle.id !== action.payload)
        },
        isEdit: (state: CountryStateType) => {
            state.editState = !state.editState
        },
        updateState: (state: CountryStateType, action: PayloadAction<any>) => {
            state.stateList = state.stateList.map((fle) =>
                fle.id === action.payload.id
                    ? { ...action.payload }
                    : fle,
            );
        },
        addState: (state: CountryStateType, action: PayloadAction<any>) => {
            state.stateList.push(action.payload)
        },
    }
})


export const {
    getStateList,
    updateState,
    deleteStateByID,
    addState,
    isEdit,
} = StateSlice.actions

export default StateSlice.reducer
