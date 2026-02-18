import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { showCartActions } from "./store/ui-slice";
import Notification from "./components/UI/Notification";
import { senCartData } from "./store/cart-actions";
import { getCartData } from "./store/cart-actions";
let isInitial = true;

function App() {
  const showCart = useSelector((state) => state.showCartReducer.showCart);
  const cart = useSelector((state) => state.cartReducer);
  const notification = useSelector(
    (state) => state.showCartReducer.notification,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartData());
  }, [dispatch]);

  useEffect(() => {
    //-----------THUNK---------
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.changed) {
      dispatch(senCartData(cart));
    }
    //-------------------------

    // const senCartData = async () => {
    // dispatch(
    //   showCartActions.setNotification({
    //     status: "pending",
    //     title: "sending...",
    //     message: "Sending cart data",
    //   }),
    // );
    // const response = await fetch(
    //   "https://shopping-store-4e299-default-rtdb.firebaseio.com/cart.json",
    //   {
    //     method: "PUT",
    //     body: JSON.stringify(cart),
    //   },
    // );
    // if (!response.ok) {
    //   throw new Error("Sending cart faild.");
    // }
    // dispatch(
    //   showCartActions.setNotification({
    //     status: "success",
    //     title: "success...",
    //     message: "Sending cart data done!",
    //   }),
    // );
    // };
    // if (isInitial) {
    //   isInitial = false;
    //   return;
    // }
    // senCartData().catch(() => {
    // dispatch(
    //   showCartActions.setNotification({
    //     status: "error",
    //     title: "error...",
    //     message: "Sending cart data failed!",
    //   }),
    // );
    // });
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
