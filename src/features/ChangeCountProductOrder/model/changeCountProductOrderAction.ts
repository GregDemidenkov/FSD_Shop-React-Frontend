import { createAsyncThunk } from "@reduxjs/toolkit"

import { ChangeCountProductOrderDto } from "./types"
import { getUserOrder } from "@pages/cart/model/getUserOrderAction"
import ProductOrderService from "@shared/api/ProductOrderService"


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