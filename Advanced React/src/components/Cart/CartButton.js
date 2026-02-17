import classes from "./CartButton.module.css";
import { showCartActions } from "../../store/ui-slice";

import { useDispatch, useSelector } from "react-redux";
const CartButton = (props) => {
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cartReducer.totalQuantity);

  function handleToggleutton() {
    dispatch(showCartActions.displayCart());
  }
  return (
    <button className={classes.button} onClick={handleToggleutton}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
