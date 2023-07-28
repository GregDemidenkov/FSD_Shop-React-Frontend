import { Product } from "@entities/product/model/types"
import { createAsyncThunk } from "@reduxjs/toolkit"

import ProductService from "../api/ProductService"


export const getProducts = createAsyncThunk<Product[], string>(
    "products/getProducts", 
    async (sort, thunkAPI) => {
        try {
            const response: any = await ProductService.getProducts(sort)

            return response.data
        } catch (error: any) {
            return thunkAPI.rejectWithValue("Error");
        }
    }
)