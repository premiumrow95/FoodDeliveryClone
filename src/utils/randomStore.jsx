import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../utils/cartSlice.jsx";

const randomStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default randomStore;
