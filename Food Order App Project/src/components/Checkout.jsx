import { useContext, useActionState } from "react";
import { currencyFormatter } from "../util/formatting";
import UserProgressContext from "../store/UserProgressContext.jsx";
import CartContext from "../store/CartContext";
import useHttp from "../hooks/useHttp.js";
import Modal from "./UI/Modal";
import Input from "./UI/Input";
import Button from "./UI/Button.jsx";
import ErrorPage from "./ErrorPage.jsx";
const requestConfg = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function Checkout({}) {
  const cartCtx = useContext(CartContext);
  const progressCtx = useContext(UserProgressContext);
  const totalPrice = cartCtx.calcTotalPrice();

  function handleCloseCheckout() {
    progressCtx.hideCheckout();
  }

  const { isFetching, error, data, sendRequest, clearData } = useHttp(
    "http://localhost:3000/orders",
    requestConfg,
    "",
  );

  function handleFinish() {
    progressCtx.hideCheckout();
    cartCtx.clearCart();
    clearData();
  }

  async function checkoutAction(prevState, fd) {
    const customData = Object.fromEntries(fd.entries()); //{email:text@example.com}

    //Send HTTP request to the backend
    await sendRequest(
      JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customData,
        },
      }),
    );
  }

  const [formState, formAction, pending] = useActionState(checkoutAction, null);

  let actions = (
    <>
      <Button textOnly type="button" onClick={handleCloseCheckout}>
        Close
      </Button>
      <Button>Submit Order</Button>
    </>
  );

  if (pending) {
    actions = <span>Sending order data...</span>;
  }

  if (data && !error) {
    return (
      <Modal open={progressCtx.progress === "checkout"} onClose={handleFinish}>
        <h2>Success!</h2>
        <p>Your order was submitted successfully.</p>

        <p className="modal-actions">
          <Button onClick={handleFinish}>Okay</Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal
      className="checkout"
      open={progressCtx.progress === "checkout"}
      onClose={handleCloseCheckout}
    >
      <form action={formAction}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(totalPrice)}</p>
        <Input label="Full Name" type="text" id="name" />
        <Input label="E-Mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>

        {error && (
          <ErrorPage title="Faild to submit order" message={error.error} />
        )}

        <p className="modal-acions">{actions}</p>
      </form>
    </Modal>
  );
}
