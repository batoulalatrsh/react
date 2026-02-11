import Header from "./components/Header";
import MealsLayout from "./components/MealsLayout";
import { UserProgressContextProvider } from "./store/UserProgressContext";
import { CartContextProvider } from "./store/CartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Header />
        <MealsLayout />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
