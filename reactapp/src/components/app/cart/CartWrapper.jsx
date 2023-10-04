import { forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import CartBox from "./components/CartBox";
import "./components/styles/cartwrapper.css";

const CartWrapper = forwardRef(({}, ref) => {
  // exporting function to header wrapper2
  useImperativeHandle(ref, () => ({
    toggleCart,
  }));

  //   toggler
  function toggleCart() {
    const cartWrapper = document.querySelector("#cartWrapperDiv");
    cartWrapper.classList.toggle("cartWrapper-wrapper-display");
    document.body.classList.toggle("body-never-scroll");
  }

  //   createportal because to render on body
  return createPortal(
    <>
      <div id="cartWrapperDiv" className="cartWrapper-wrapper">
        <CartBox toggleCart={toggleCart} />
      </div>
    </>,
    document.body
  );
});

export default CartWrapper;
