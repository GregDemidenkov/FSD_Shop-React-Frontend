import { createSlice, PayloadAction } from "@reduxjs/toolkit";


import { Product } from "@entities/product/model/types";
import { getProducts } from "./asyncAction";

interface ProductsState {
    products: Product[],
    isLoading: boolean
}

const initialState: ProductsState = {
    products: [],
    isLoading: false
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
            state.isLoading = false;
            state.products = action.payload
        });
        builder.addCase(getProducts.rejected, (state) => {
            state.isLoading = false;
        });
    },
})

export const { } = productSlice.actions;

export default productSlice.reducer;