import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../types/index"

interface IInitialState {
    products: IProduct[],
    quantity: number
}

const initialState: IInitialState = {
    products: JSON.parse(<string>localStorage.getItem("products")) || [],
    quantity: JSON.parse(<string>localStorage.getItem("quantity")) || 0
}

const cartReducer = createSlice({
    name: "products",
    initialState,
    reducers: {
        AddToCart: (state, action: PayloadAction<IProduct>) => {
            const existingProduct = state.products.find(product => product.id === action.payload.id);
            if (!existingProduct) {
                state.products.push(action.payload);
                state.quantity = state.products.length
                localStorage.setItem("products", JSON.stringify(state.products))
                localStorage.setItem("quantity", JSON.stringify(state.quantity))
            }
            else {
                state.quantity += 1
                localStorage.setItem("quantity", JSON.stringify(state.quantity))
            }
        },
        RemoveCart: (state, action: PayloadAction<IProduct>) => {
            state.products = state.products.filter((likedProduct: IProduct) => likedProduct.id !== action.payload.id)
            state.quantity = 0
            localStorage.setItem("products", JSON.stringify(state.products))
            localStorage.setItem("quantity", JSON.stringify(state.quantity))
        }
    }
})

export const { AddToCart, RemoveCart } = cartReducer.actions;
export default cartReducer.reducer