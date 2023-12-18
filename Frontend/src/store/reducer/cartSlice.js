import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const newCart = [...state, action.payload];
            return newCart;
        },
        removeProduct: (state, action) => {
            state.filter(x => x.id !== action.payload);
            return state = state
        }
    },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;