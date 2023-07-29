import { createAsyncThunk } from "@reduxjs/toolkit"

import UserOrderService from "@pages/cart/api/UserOrderService"
import { clearState } from "@pages/cart/model/slice"


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