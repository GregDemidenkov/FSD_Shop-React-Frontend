import { createAsyncThunk } from "@reduxjs/toolkit"

import ProductOrderService from "@pages/cart/api/ProductOrderService"
import { getUserOrder } from "@pages/cart/model/getUserOrderAction"
import { DeleteFromCartDto } from "./types"


export const deleteFromCart = createAsyncThunk(
    "cart/DeleteFromCartDto", 
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