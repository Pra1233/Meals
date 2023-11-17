import React, { useContext } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import CartContext from "../../../store/cart-context";

// AMOUNT-MEALITEM FORM

const MealItemForm = (props) => {
  const cartCtx = useContext(CartContext);

  // IMPORTANT
  const addItemToCart = (event) => {
    event.preventDefault();
    //update the cart context.items
    // console.log(props); //each items
    // cartCtx.items.push(props.item);

    const quantity = document.getElementById("amount_" + +props.id).value;
    console.log("quantity", quantity);
    cartCtx.addItem({ ...props.item, quantity: quantity }); //function
    console.log(1, cartCtx);
  };
  return (
    <form className={classes.form}>
      {console.log("inside render", cartCtx.items)}
      <Input
        label="Amount"
        input={{
          id: "amount_" + +props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={addItemToCart}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
