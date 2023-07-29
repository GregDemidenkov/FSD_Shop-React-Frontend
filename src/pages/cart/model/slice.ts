import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { getUserOrder } from "./getUserOrderAction"
import { FullUserOrder, ProductOrder } from "./types"
import { addProductOrder } from "@features/AddToCart/model/addToCartAction"
import { deleteFromCart } from "@features/DeleteFromCart/model/deleteFromCartAction"
import { changeCountProductOrder } from "@features/ChangeCountProductOrder/model/changeCountProductOrderAction"
import { clearCart } from "@features/ClearCart/model/clearCartAction"


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
        clearState(state) {
            state.productOrders = []
            state.userOrderId = ""
        }
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

        builder.addCase(clearCart.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(clearCart.fulfilled, (state) => {
            state.isLoading = false
        })
        builder.addCase(clearCart.rejected, (state) => {
            state.isLoading = false
        })
    },
})

export const { clearState } = CartSlice.actions

export default CartSlice.reducer