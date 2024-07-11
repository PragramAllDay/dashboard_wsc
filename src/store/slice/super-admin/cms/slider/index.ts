import { PaginationType } from "@/utils/types/pagination";
import { SliderType } from "@/utils/types/cms";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface StateType {
    editSlider: boolean;
    sliderPagination: PaginationType;
    sliderList: SliderType[];
}

const initialState = {
    sliderList: [],
    sliderPagination: {
        page: 0,
        totalSize: 0,
        rowsPerPage: 10,
    },
    editSlider: false,
}

export const SliderSlice = createSlice({
    name: "slider",
    initialState,
    reducers: {
        getSliderList: (state: StateType, action) => {
            state.sliderList = action.payload.list
            state.sliderPagination = action.payload.newPagination
        },
        deleteSlider: (state: StateType, action) => {
            state.sliderList = state.sliderList.filter((fle) => fle.id !== action.payload)
        },
        isEdit: (state: StateType) => {
            state.editSlider = !state.editSlider
        },
        updateSlider: (state: StateType, action: PayloadAction<any>) => {
            state.sliderList = state.sliderList.map((fle) =>
                fle.id === action.payload.id
                    ? { ...action.payload }
                    : fle,
            );
        },
        addSlider: (state: StateType, action: PayloadAction<any>) => {
            state.sliderList.push(action.payload)
        },
    }
})


export const {
    getSliderList,
    updateSlider,
    deleteSlider,
    addSlider,
    isEdit,
} = SliderSlice.actions

export default SliderSlice.reducer
