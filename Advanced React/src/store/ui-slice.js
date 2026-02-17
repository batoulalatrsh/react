import { createSlice } from "@reduxjs/toolkit";
const initialState = { showCart: false };
const uiSlice = createSlice({
  name: "showCart",
  initialState,
  reducers: {
    displayCart(state) {
      state.showCart = !state.showCart;
    },
  },
});
export default uiSlice.reducer;
export const showCartActions = uiSlice.actions;
