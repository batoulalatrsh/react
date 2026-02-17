import { configureStore } from "@reduxjs/toolkit";
import showCartReducer from "./ui-slice";
import cartReducer from './cart-slice'

const store = configureStore({
  reducer: { showCartReducer:showCartReducer,cartReducer:cartReducer },
});

export default store;
