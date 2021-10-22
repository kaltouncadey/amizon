import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./CartStore/CartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export default store;
