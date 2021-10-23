import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    items: [],
    totalAmount: 0,
    totalQty: 0,
  },
  reducers: {
    addToCart(state, action) {
      state.totalQty++;
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.totalAmount += newItem.price;
        state.items.push(newItem);
      } else {
        existingItem.qty++;
        state.totalAmount += existingItem.price;
      }
    },
    removeCart(state, action) {
      state.totalQty--;

      const deletingItemId = action.payload;
      const deletingItem = state.items.find(
        (item) => item.id === deletingItemId
      );
      if (deletingItem.qty === 1) {
        state.items.shift(deletingItem);
        state.totalAmount = state.items.reduce(
          (prev, curr) => prev + Number(curr.price) * curr.qty,
          0
        );
      } else {
        deletingItem.qty--;
        state.totalAmount = state.items.reduce(
          (prev, curr) => prev + Number(curr.price) * curr.qty,
          0
        );
      }
    },
  },
});

const cartActions = cartSlice.actions;

export { cartActions, cartSlice };
