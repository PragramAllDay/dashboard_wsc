import { PaginationType } from "@/utils/types/pagination";
import { CategoryType } from "@/utils/types/categories";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface StateType {
    editCategory: boolean;
    categoryPagination: PaginationType;
    categoryList: CategoryType[];
}

const initialState = {
    categoryList: [],
    categoryPagination: {
        page: 0,
        totalSize: 0,
        rowsPerPage: 10,
    },
    editCategory: false,
}

export const CategorySlice = createSlice({
    name: "Category",
    initialState,
    reducers: {
        getCategoryList: (state: StateType, action) => {
            state.categoryList = action.payload.list
            state.categoryPagination = action.payload.newPagination
        },
        deleteCategory: (state: StateType, action) => {
            state.categoryList = state.categoryList.filter((fle) => fle.id !== action.payload)
        },
        isEdit: (state: StateType) => {
            state.editCategory = !state.editCategory
        },
        updateCategory: (state: StateType, action: PayloadAction<any>) => {
            state.categoryList = state.categoryList.map((fle) =>
                fle.id === action.payload.id
                    ? { ...action.payload }
                    : fle,
            );
        },
        addCategory: (state: StateType, action: PayloadAction<any>) => {
            state.categoryList.push(action.payload)
        },
    }
})


export const {
    getCategoryList,
    updateCategory,
    deleteCategory,
    addCategory,
    isEdit,
} = CategorySlice.actions

export default CategorySlice.reducer
