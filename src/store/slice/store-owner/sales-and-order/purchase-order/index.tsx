import { PaginationType } from "@/utils/types/pagination";
import { PurchaseOrderType } from "@/utils/types/sale-and-order";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

interface StateType {
  pagination: PaginationType;
  list: PurchaseOrderType[];
}

const initialState: StateType = {
  pagination: {
    page: 0,
    totalSize: 0,
    rowsPerPage: 10,
  },
  list: [],
}

export const PurchaseOrderSlice = createSlice({
  name: "purchase-order",
  initialState,
  reducers: {
    getPurchaseOrderList: (state: StateType, action) => {
      state.list = action.payload.list
      state.pagination = action.payload.newPagination
    },
    deletePurchaseOrder: (state: StateType, action) => {
      state.list = state.list.filter((fle) => fle.id !== action.payload)
    },
    updatePurchaseOrder: (state: StateType, action: PayloadAction<any>) => {
      state.list = state.list.map((fle) =>
        fle.id === action.payload.id
          ? { ...action.payload }
          : fle,
      );
    },
    addPurchaseOrder: (state: StateType, action: PayloadAction<any>) => {
      state.list.push(action.payload)
    },
  }
})


export const {
  getPurchaseOrderList,
  updatePurchaseOrder,
  deletePurchaseOrder,
  addPurchaseOrder,
} = PurchaseOrderSlice.actions

export default PurchaseOrderSlice.reducer


