import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "../components/UI/Button.jsx"
import CartContext from "../store/CartContext.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";

export default function Header({}) {
  const { items } = useContext(CartContext);
  const progressCtx = useContext(UserProgressContext);

  const totalQuantity = items.reduce((totalNumOfItems, item) => {
    return totalNumOfItems + item.quantity;
  }, 0);

  function handleShowCart() {
    progressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="Food order" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart({totalQuantity})
        </Button>
      </nav>
    </header>
  );
}
