import { addProductOrder } from "@features/AddToCart/model/addToCartAction"
import { UserOrder } from "@features/AddToCart/model/types"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"


interface CartState {
    productOrder: [],
    isLoading: boolean
}

const initialState: CartState = {
    productOrder: [],
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
        builder.addCase(addProductOrder.fulfilled, (state, action: PayloadAction<UserOrder>) => {
            state.isLoading = false
            console.log(action.payload)
        })
        builder.addCase(addProductOrder.rejected, (state) => {
            state.isLoading = false
        })
    },
})

export const { } = CartSlice.actions

export default CartSlice.reducer