import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  calcTotalPrice: () => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id,
    );

    const updatedItems = [...state.items];

    // If item in the cart i will increase the quantity
    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex];
      const updateItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updateItem;
    } else {
      //If not inside cart we will add it
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    //Return the updated state😍
    return { ...state, items: updatedItems };
  }

  if (action.type === "REMOVE_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id,
    );

    const existingCartItem = state.items[existingCartItemIndex];

    const updatedItems = [...state.items];
    if (existingCartItem.quantity === 1) {
      updatedItems.splice(existingCartItemIndex, 1);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };

      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      ...state,
      items: updatedItems,
    };
  }

  return state;
}

export function CartContextProvider({ children }) {
  //Item array is the array of oredered items
  const [cartState, cartDispatch] = useReducer(cartReducer, { items: [] });

  function handleAddItemToCart(item) {
    cartDispatch({
      type: "ADD_ITEM",
      item,
    });
  }
  function handlRemoveItemFromCart(id) {
    cartDispatch({
      type: "REMOVE_ITEM",
      id,
    });
  }
  function calcTotalPrice() {
    return cartState.items.reduce(
      (totalPrice, item) => totalPrice + item.quantity * item.price,
      0,
    );
  }

  const ctxValue = {
    items: cartState.items,
    addItem: handleAddItemToCart,
    removeItem: handlRemoveItemFromCart,
    calcTotalPrice,
  };

  console.log(ctxValue);
  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}

export default CartContext;
