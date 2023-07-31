import { configureStore } from "@reduxjs/toolkit"

import productsReducer from '@entities/product/model/slice'
import cartReducer from '@entities/cart/model/slice'
import authReducer from '@entities/auth/model/slice'


export const store = configureStore({
    reducer: {
        products: productsReducer,
        auth: authReducer,
        cart: cartReducer
    }
})