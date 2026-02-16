// const redux = require("redux");
import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counte-slice";
import authReducer from "./auth-slice";

// function counterReducer(state = initialState, action) {
//   if (action.type === "increment") {
//     return { counter: state.counter + 1, showCounter: state.showCounter };
//   }

//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "decrement") {
//     return { counter: state.counter - 1, showCounter: state.showCounter };
//   }

//   if (action.type === "toggle") {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }

//   return state;
// }

// const store = createStore(counterSlice.reducer);
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

// //Subscriber with data store
// function counterSubscriber() {
//   console.log(store.getState());
// }
// store.subscribe(counterSubscriber);

// store.dispatch({ type: "increment" });

//Now we want subscribe with component

export default store;
