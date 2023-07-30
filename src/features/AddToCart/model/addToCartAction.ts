import { createAsyncThunk } from "@reduxjs/toolkit"

import { AddProductOrderDto, UserOrder } from "./types"
import { getActiveProducts } from "@entities/product/model/getActiveProductsAction"
import ProductOrderService from "@shared/api/ProductOrderService"


export const addProductOrder = createAsyncThunk<UserOrder, AddProductOrderDto>(
    "cart/addProductOrder", 
    async (dto, thunkAPI) => {
        try {
            const response: any = await ProductOrderService.addProductOrder(dto)

            thunkAPI.dispatch(getActiveProducts(dto.userId))
            
            return response.data
        } catch (error: any) {
            return thunkAPI.rejectWithValue("Error");
        }
    }
)