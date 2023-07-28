import { createAsyncThunk } from "@reduxjs/toolkit"

import { AddProductOrderDto, UserOrder } from "./types"
import ProductOrderService from "@pages/cart/api/ProductOrderService"


export const addProductOrder = createAsyncThunk<UserOrder, AddProductOrderDto>(
    "cart/addProductOrder", 
    async (dto, thunkAPI) => {
        try {
            const response: any = await ProductOrderService.addProductOrder(dto)

            return response.data
        } catch (error: any) {
            return thunkAPI.rejectWithValue("Error");
        }
    }
)