import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./Auth/AuthSlice";
import { cartSlice } from "./CartStore/CartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    userAuth: userSlice.reducer,
  },
});

export default store;
