import React, { useContext } from "react"; //3
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context"; //3

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext); //4 //whenver context changes it is reevaluated
  let quantity = 0;
  cartCtx.items.forEach((item) => {
    quantity = quantity + +item.quantity;
  });
  // const numberOfCartItems = cartCtx.items.reduce((currNumber, item) => {
  //   return currNumber + item.amount;
  // }, 0);

  return (
    <button className={classes.button} onClick={props.oClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>{cartCtx.msg}</span>
      {console.log("ooooooooo", quantity)}
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default HeaderCartButton;
