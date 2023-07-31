import { createAsyncThunk } from "@reduxjs/toolkit"

import UserOrderService from "../api/UserOrderService";
import { FullUserOrder } from "@entities/cart/model/types";


export const getUserOrder = createAsyncThunk<FullUserOrder, string>(
    "cart/getUserOrder", 
    async (userId, thunkAPI) => {
        try {
            const response: any = await UserOrderService.getUserOrder(userId)

            return response.data
        } catch (error: any) {
            return thunkAPI.rejectWithValue("Error");
        }
    }
)