import React from "react";
import "./Button.css"

const Button = ({ children, type, btnFunction, buttonStyle, buttonSize, text }) => {
  return <button type={type} onClick={() => btnFunction()}>{text}</button>;
};


export default Button;

//<Button btnFunction={sayHello}>{Hello}</Button>
