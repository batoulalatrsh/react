import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "../UI/Button.jsx";
import CartContext from "../store/CartContext.jsx";

export default function Header({}) {
  const { items } = useContext(CartContext);
  const totalQuantity = items.reduce((totalNumOfItems, item) => {
    return totalNumOfItems + item.quantity;
  }, 0);
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="Food order" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly>Cart({totalQuantity})</Button>
      </nav>
    </header>
  );
}
