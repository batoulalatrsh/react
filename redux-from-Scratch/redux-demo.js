//Import redux in this shape ,and return obj contain the methods
const redux = require("redux");

const storeReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      state: state.counter - 1,
    };
  }

  return state;
};

const store = redux.createStore(storeReducer);

// console.log(store.getState());

const counterSubscriber = () => {
  //Give us latest state snapshot after it was updated
  const latestState = store.getState();
  console.log(latestState);
};

//subscriber function will be execute when ever
store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
