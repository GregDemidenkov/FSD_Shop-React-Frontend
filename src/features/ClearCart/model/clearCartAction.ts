import { createAsyncThunk } from "@reduxjs/toolkit"

import { clearState } from "@entities/cart"
import UserOrderService from "@entities/cart/api/UserOrderService"


export const clearCart = createAsyncThunk(
    "cart/clearCart", 
    async (userOrderId: string, thunkAPI) => {
        try {
            const response: any = await UserOrderService.clearCart(userOrderId)

            thunkAPI.dispatch(clearState())

            return response.data
        } catch (error: any) {
            return thunkAPI.rejectWithValue("Error");
        }
    }
)