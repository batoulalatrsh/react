import { createContext } from "react";
// wrapper wrap the component and have access to its initial value
export const CartContext = createContext({
  items: [],
});
