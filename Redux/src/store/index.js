// const redux = require("redux");
import { createStore } from "redux";

function counterReducer(state = { counter: 0 }, action) {
  if (action.type === "increment") {
    return { counter: state.counter + 1 };
  }

  if (action.type === "decrement") {
    return { counter: state.counter - 1 };
  }

  return state;
}

const store = createStore(counterReducer);

// //Subscriber with data store
// function counterSubscriber() {
//   console.log(store.getState());
// }
// store.subscribe(counterSubscriber);

// store.dispatch({ type: "increment" });

//Now we want subscribe with component

export default store