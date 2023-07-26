import { createAction, createSlice } from '@reduxjs/toolkit'
import { put } from 'redux-saga/effects'

import ProductService from '../api/ProductService'
import { Product } from '@entities/product/model/types'


interface ProductsState {
  list: Array<Product>
}

const initialState: ProductsState = {
    list: []
}

export function* getProductsSaga(): any {
    const payload = yield ProductService.getProducts()

    yield put(setProducts(payload.data))
}


const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.list = action.payload
        },
    }
})


export const GET_PRODUCTS = 'products/getProducts'
export const getProducts = createAction(GET_PRODUCTS)

export const { setProducts } = productsSlice.actions
export default productsSlice.reducer