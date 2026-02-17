import { createSlice } from "@reduxjs/toolkit";
const initialState = { showCart: false, notification: null };
const uiSlice = createSlice({
  name: "showCart",
  initialState,
  reducers: {
    displayCart(state) {
      state.showCart = !state.showCart;
    },
    setNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});
export default uiSlice.reducer;
export const showCartActions = uiSlice.actions;
