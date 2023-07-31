import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { getProducts } from "@pages/catalog"
import { getActiveProducts, Product } from "@entities/product"


interface ProductsState {
    products: Product[],
    sort: 'down' | 'up' | "default"
    activeProducts: string[],
    isLoading: boolean
}

const initialState: ProductsState = {
    products: [],
    sort: "default",
    activeProducts: [],
    isLoading: false
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setSort(state, action) {
            state.sort = action.payload
        },
        clearActiveProducts(state) {
            state.activeProducts = []
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
            state.isLoading = false
            state.products = action.payload
        })
        builder.addCase(getProducts.rejected, (state) => {
            state.isLoading = false
        })

        builder.addCase(getActiveProducts.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getActiveProducts.fulfilled, (state, action: PayloadAction<string[]>) => {
            state.isLoading = false
            state.activeProducts = action.payload
        })
        builder.addCase(getActiveProducts.rejected, (state) => {
            state.isLoading = false
        })
    },
})

export const { setSort, clearActiveProducts } = productSlice.actions

export default productSlice.reducer