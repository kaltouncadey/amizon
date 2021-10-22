import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    items: [],
    totalAmount: 0,
  },
  reducers: {
    addToCart(state, payload) {
      state.items.push(payload);
    },
  },
});

const cartActions = cartSlice.actions;

export { cartActions, cartSlice };
