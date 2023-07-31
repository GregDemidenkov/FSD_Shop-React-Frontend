import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { getUserOrder } from "./getUserOrderAction"
import { FullUserOrder, ProductOrder } from "./types"


interface CartState {
    userOrderId: string,
    productOrders: ProductOrder[],
    check: number,
    isLoading: boolean
}

const initialState: CartState = {
    userOrderId: "",
    productOrders: [],
    check: 0,
    isLoading: false
}

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearState(state) {
            state.productOrders = []
            state.userOrderId = ""
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUserOrder.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getUserOrder.fulfilled, (state, action: PayloadAction<FullUserOrder>) => {
            state.isLoading = false
            state.userOrderId = action.payload._id ? action.payload._id : ""
            state.productOrders = action.payload.products ? action.payload.products : []
            state.check = action.payload.check
        })
        builder.addCase(getUserOrder.rejected, (state) => {
            state.isLoading = false
        })
    },
})

export const { clearState } = CartSlice.actions

export default CartSlice.reducer