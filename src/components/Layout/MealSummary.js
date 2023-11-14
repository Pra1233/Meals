import React from "react";
import classes from "./MealSummary.module.css";

const MealSummary = () => {
  return (
    <section className={classes.section}>
      <h1 className={classes.h1}>Delicious Food ,Delivered To You </h1>
      <p className={classes.p}>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p className={classes.p}>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};

export default MealSummary;
