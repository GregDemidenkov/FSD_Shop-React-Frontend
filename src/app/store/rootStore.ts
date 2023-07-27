import { configureStore } from "@reduxjs/toolkit"
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'

import productsReducer from '@pages/catalog/model/slice'
import authReducer from '@entities/auth/model/slice'

export const store = configureStore({
    reducer: {
        products: productsReducer,
        auth: authReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector