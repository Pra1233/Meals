import React from "react";
import classes from "./Input.module.css";

// input has ex
// {type:text}   then this code {...props.input} type="text" get added"

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} />
    </div>
  );
};

export default Input;
