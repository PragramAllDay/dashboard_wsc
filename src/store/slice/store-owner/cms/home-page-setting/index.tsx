import { HomePageSettingType } from "@/utils/types/cms";
import { PaginationType } from "@/utils/types/pagination";
import { createSlice } from "@reduxjs/toolkit";

interface StateType {
    smallImagePagination: PaginationType;
    biggerImagePagination: PaginationType;
    bannerImagePagination: PaginationType;
    smallImageList: HomePageSettingType[];
    biggerImageList: HomePageSettingType[];
    bannerImageList: HomePageSettingType[];
}

const initialState: StateType = {
    smallImagePagination: {
        page: 0,
        totalSize: 0,
        rowsPerPage: 10,
    },
    biggerImagePagination: {
        page: 0,
        totalSize: 0,
        rowsPerPage: 10,
    },
    bannerImagePagination: {
        page: 0,
        totalSize: 0,
        rowsPerPage: 10,
    },
    smallImageList: [],
    biggerImageList: [],
    bannerImageList: [],
}

export const HomePageSettingSlice = createSlice({
    name: "home-page-setting",
    initialState,
    reducers: {
        getSmallImageList: (state: StateType, action) => {
            state.smallImageList = action.payload.list
            state.smallImagePagination = action.payload.newPagination
        },
        getBiggerImageList: (state: StateType, action) => {
            state.biggerImageList = action.payload.list
            state.biggerImagePagination = action.payload.newPagination
        },
        getBannerImageList: (state: StateType, action) => {
            state.bannerImageList = action.payload.list
            state.bannerImagePagination = action.payload.newPagination
        },
    }
})


export const {
    getSmallImageList,
    getBiggerImageList,
    getBannerImageList,
} = HomePageSettingSlice.actions

export default HomePageSettingSlice.reducer
