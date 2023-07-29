import { configureStore } from "@reduxjs/toolkit"

import productsReducer from '@pages/catalog/model/slice'
import cartReducer from '@pages/cart/model/slice'
import authReducer from '@entities/auth/model/slice'


export const store = configureStore({
    reducer: {
        products: productsReducer,
        auth: authReducer,
        cart: cartReducer
    }
})