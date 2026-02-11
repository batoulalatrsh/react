import { useContext } from "react";
import Modal from "./UI/Modal.jsx";
import CartContext from "../store/CartContext.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";
import { currencyFormatter } from "../util/formatting.js";
import Button from "./UI/Button.jsx";
import CartItem from "./CartItem.jsx";

export default function Cart() {
  const { items, addItem, removeItem, calcTotalPrice } =
    useContext(CartContext);
  const progressCtx = useContext(UserProgressContext);

  const cartTotal = calcTotalPrice();

  function handleCloseCart() {
    progressCtx.hideCart();
  }

  function handleShowCheckout() {
    progressCtx.showCheckout();
  }

  return (
    <Modal className="cart" open={progressCtx.progress === "cart"}>
      <h2>Your Cart</h2>
      <ul>
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onIncrease={() => {
              addItem(item);
            }}
            onDecrease={() => {
              removeItem(item.id);
            }}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p>
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        {items.length > 0 ? (
          <Button onClick={handleShowCheckout}>Go to Checkout</Button>
        ) : null}
      </p>
    </Modal>
  );
}
