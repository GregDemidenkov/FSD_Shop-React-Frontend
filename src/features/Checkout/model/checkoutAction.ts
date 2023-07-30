import { createAsyncThunk } from "@reduxjs/toolkit"

import UserOrderService from "@pages/cart/api/UserOrderService"
import { clearState } from "@pages/cart/model/slice"


export const checkout = createAsyncThunk(
    "cart/checkout", 
    async (userOrderId: string, thunkAPI) => {
        try {
            const response: any = await UserOrderService.checkout(userOrderId)

            thunkAPI.dispatch(clearState())

            return response.data
        } catch (error: any) {
            return thunkAPI.rejectWithValue("Error");
        }
    }
)