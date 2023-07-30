import { AxiosResponse } from "axios"

import UserOrderService from "@pages/cart/api/UserOrderService"
import { FullUserOrder } from "@pages/cart/model/types"
import { createAsyncThunk } from "@reduxjs/toolkit"


// export const getActiveProducts = async (userId: string) => {
//     try {
//         const response: AxiosResponse<FullUserOrder> = await UserOrderService.getUserOrder(userId)

//         let activeProducts: string[] = []
//         response.data.products.forEach((productOrder) => {
//             activeProducts.push(productOrder.product_id._id)
//         })

//         return activeProducts
//     } catch (error: any) {
//         throw Error(error)
//     }
// }


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
