import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { getUserOrder } from "./getUserOrderAction"
import { FullUserOrder, ProductOrder } from "./types"
import { addProductOrder } from "@features/AddToCart/model/addToCartAction"
import { deleteFromCart } from "@features/DeleteFromCart/model/deleteFromCartAction"
import { changeCountProductOrder } from "@features/ChangeCountProductOrder/model/changeCountProductOrderAction"


interface CartState {
    userOrderId: string,
    productOrders: ProductOrder[],
    isLoading: boolean
}

const initialState: CartState = {
    userOrderId: "",
    productOrders: [],
    isLoading: false
}

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(addProductOrder.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(addProductOrder.fulfilled, (state) => {
            state.isLoading = false
        })
        builder.addCase(addProductOrder.rejected, (state) => {
            state.isLoading = false
        })

        builder.addCase(getUserOrder.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getUserOrder.fulfilled, (state, action: PayloadAction<FullUserOrder>) => {
            state.isLoading = false
            state.userOrderId = action.payload._id ? action.payload._id : ""
            state.productOrders = action.payload.products ? action.payload.products : []
        })
        builder.addCase(getUserOrder.rejected, (state) => {
            state.isLoading = false
        })

        builder.addCase(deleteFromCart.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(deleteFromCart.fulfilled, (state) => {
            state.isLoading = false
        })
        builder.addCase(deleteFromCart.rejected, (state) => {
            state.isLoading = false
        })

        builder.addCase(changeCountProductOrder.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(changeCountProductOrder.fulfilled, (state) => {
            state.isLoading = false
        })
        builder.addCase(changeCountProductOrder.rejected, (state) => {
            state.isLoading = false
        })
    },
})

export const { } = CartSlice.actions

export default CartSlice.reducer