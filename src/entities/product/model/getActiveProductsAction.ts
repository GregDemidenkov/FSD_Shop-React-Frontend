import { AxiosResponse } from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

import { FullUserOrder } from "@entities/cart/model/types"
import UserOrderService from "@entities/cart/api/UserOrderService"


export const getActiveProducts = createAsyncThunk<string[], string>(
    "catalog/getActiveProducts", 
    async (userId, thunkAPI) => {
        try {
            const response: AxiosResponse<FullUserOrder> = await UserOrderService.getUserOrder(userId)

            let activeProducts: string[] = []
            response.data.products.forEach((productOrder) => {
                activeProducts.push(productOrder.product_id._id)
            })
    
            return activeProducts
        } catch (error: any) {
            return thunkAPI.rejectWithValue("Error");
        }
    }
)
