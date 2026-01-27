import { createContext } from "react";
// wrapper wrap the component and have access to its initial value
//we gone to use it "as" a component so start with a capital letter
export const CartContext = createContext({
  items: [],
});
