import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);

  const addItemToCartHandler = (newitem) => {
    // updateItems([...items, item]); //oldarray ,addnew
    updateItems((items) => {
      const index = items.findIndex((i) => i.id == newitem.id);
      if (index > 0) {
        items[index].quantity += newitem.quantity;
        return [...items];
      } else return [...items, newitem];
    });

    console.log("cartContex addItemToCartHandler", cartContext);
  };

  const removeItemToCartHandler = (id) => {};

  // IMPortNT
  const cartContext = {
    items: items,
    // totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
    msg: " Your Cart",
  };

  return (
    //not rerender when push to items so used function  to rerender

    <CartContext.Provider value={cartContext}>
      {console.log("CartContext")}
      {props.children}
    </CartContext.Provider>
  );
};
//{props.childeren}(allows us to wrap n component should get acces to context with that cart provider)
export default CartProvider;
