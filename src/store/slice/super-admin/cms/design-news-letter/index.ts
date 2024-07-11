import { DesignNewsLetterType } from "@/utils/types/cms";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface StateType {
    designNewsLetterList: DesignNewsLetterType[];
}

const initialState = {
    designNewsLetterList: [],
}

export const DesignNewsLetterSlice = createSlice({
    name: "design-news-letter",
    initialState,
    reducers: {
        addDesignNewsLetter: (state: StateType, action: PayloadAction<any>) => {
            state.designNewsLetterList.push(action.payload)
        },
    }
})

export const {
    addDesignNewsLetter,
} = DesignNewsLetterSlice.actions

export default DesignNewsLetterSlice.reducer

