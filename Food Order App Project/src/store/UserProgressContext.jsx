import { createContext, useState } from "react";

const UserProgressContext = createContext({
  progress: "", //Cart or checkout
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export function UserProgressContextProvider({ children }) {
  const [userProgress, setUserProgress] = useState("");

  function showCart() {
    setUserProgress("cart");
  }

  function hideCart() {
    setUserProgress("");
  }

  function showCheckout() {
    setUserProgress("checkout");
  }

  function hideCheckout() {
    setUserProgress("");
  }

  const ctxValue = {
    progress: userProgress,
    showCart,
    hideCart,
    showCheckout,
    hideCheckout,
  };
  return (
    <UserProgressContext.Provider value={ctxValue}>
      {children}
    </UserProgressContext.Provider>
  );
}

export default UserProgressContext;
