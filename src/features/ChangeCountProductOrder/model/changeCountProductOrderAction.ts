import { createAsyncThunk } from "@reduxjs/toolkit"

import ProductOrderService from "@pages/cart/api/ProductOrderService"
import { getUserOrder } from "@pages/cart/model/getUserOrderAction"
import { ChangeCountProductOrderDto } from "./types"



export const changeCountProductOrder = createAsyncThunk(
    "cart/ChangeCountProductOrder", 
    async (dto: ChangeCountProductOrderDto, thunkAPI) => {
        try {
            const response: any = await ProductOrderService.changeCountProductOrder(dto)

            thunkAPI.dispatch(getUserOrder(dto.userId))

            return response.data
        } catch (error: any) {
            return thunkAPI.rejectWithValue("Error");
        }
    }
)