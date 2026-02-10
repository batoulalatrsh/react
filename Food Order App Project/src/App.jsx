import Header from "./components/Header";
import MealsLayout from "./components/MealsLayout";
import { CartContextProvider } from "./store/CartContext";
function App() {
  return (
    <>
      <CartContextProvider>
        <Header />
        <MealsLayout />
      </CartContextProvider>
    </>
  );
}

export default App;
