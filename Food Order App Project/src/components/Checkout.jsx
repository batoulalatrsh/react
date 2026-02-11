import { useContext } from "react";
import { currencyFormatter } from "../util/formatting";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext.jsx";
import Modal from "./UI/Modal";
import Input from "./UI/Input";
import Button from "./UI/Button.jsx";

export default function Checkout({}) {
  const cartCtx = useContext(CartContext);
  const progressCtx = useContext(UserProgressContext);
  const totalPrice = cartCtx.calcTotalPrice();

  return (
    <Modal className="checkout" open={progressCtx.progress === "checkout"}>
      <form>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(totalPrice)}</p>
        <Input label="Full Name" type="text" id="full-name" />
        <Input label="E-Mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>

        <p className="modal-acions">
          <Button
            textOnly
            type="button"
            onClick={() => progressCtx.hideCheckout()}
          >
            Close
          </Button>
          <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}
