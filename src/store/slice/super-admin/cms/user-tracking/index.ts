import { CMSUserTrackingType } from "@/utils/types/cms";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface StateType {
    editUserTracking: boolean;
    userTrackingPagination: any;
    userTrackings: CMSUserTrackingType[];
}

const initialState = {
    userTrackings: [],
    userTrackingPagination: {
        page: 0,
        totalSize: 0,
        rowsPerPage: 10,
    },
    editUserTracking: false,
}

export const UserTrackingSlice = createSlice({
    name: "UserTracking",
    initialState,
    reducers: {
        getUserTrackingList: (state: StateType, action) => {
            state.userTrackings = action.payload.list
            state.userTrackingPagination = action.payload.newPagination
        },
        deleteUserTracking: (state: StateType, action) => {
            state.userTrackings = state.userTrackings.filter((fle) => fle.id !== action.payload)
        },
        isEdit: (state: StateType) => {
            state.editUserTracking = !state.editUserTracking
        },
        updateUserTracking: (state: StateType, action: PayloadAction<any>) => {
            state.userTrackings = state.userTrackings.map((fle) =>
                fle.id === action.payload.id
                    ? { ...action.payload }
                    : fle,
            );
        },
        addUserTracking: (state: StateType, action: PayloadAction<any>) => {
            state.userTrackings.push(action.payload)
        },
    }
})


export const {
    getUserTrackingList,
    updateUserTracking,
    deleteUserTracking,
    addUserTracking,
    isEdit,
} = UserTrackingSlice.actions

export default UserTrackingSlice.reducer
