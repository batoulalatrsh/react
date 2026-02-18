import { showCartActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const getCartData = function () {
  return async (dispatch) => {
    async function fetchData() {
      const response = await fetch(
        "https://shopping-store-4e299-default-rtdb.firebaseio.com/cart.json",
      );

      if (!response.ok) {
        throw new Error("Could Not fetch the data");
      }

      const data = await response.json();

      return data;
    }

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        }),
      );
    } catch (err) {
      dispatch(
        showCartActions.setNotification({
          status: "error",
          title: "error...",
          message: "Fetching cart data failed!",
        }),
      );
    }
  };
};

export const senCartData = function (cart) {
  return async (dispatch) => {
    dispatch(
      showCartActions.setNotification({
        status: "pending",
        title: "sending...",
        message: "Sending cart data",
      }),
    );

    async function sendRequest() {
      const response = await fetch(
        "https://shopping-store-4e299-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        },
      );

      if (!response.ok) {
        throw new Error("Sending cart faild.");
      }
    }

    try {
      await sendRequest();

      dispatch(
        showCartActions.setNotification({
          status: "success",
          title: "success...",
          message: "Sending cart data done!",
        }),
      );
    } catch (err) {
      dispatch(
        showCartActions.setNotification({
          status: "error",
          title: "error...",
          message: "Sending cart data failed!",
        }),
      );
    }
  };
};
