import { createAsyncThunk } from "@reduxjs/toolkit"

import { DeleteFromCartDto } from "./types"
import { getUserOrder } from "@pages/cart/model/getUserOrderAction"
import ProductOrderService from "@shared/api/ProductOrderService"


export const deleteFromCart = createAsyncThunk(
    "cart/deleteFromCart", 
    async (dto: DeleteFromCartDto, thunkAPI) => {
        try {
            const response: any = await ProductOrderService.deleteFromCart(dto.productOrderId)

            thunkAPI.dispatch(getUserOrder(dto.userId))

            return response.data
        } catch (error: any) {
            return thunkAPI.rejectWithValue("Error");
        }
    }
)