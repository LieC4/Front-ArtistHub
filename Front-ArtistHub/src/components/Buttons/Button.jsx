import React from "react";
import "./Button.css"

const STYLES = [
  "btn--primary--solid",
  "btn--formulary--solid",
  "btn--new--solid",
  "btn--edit--solid",
  "btn--delete--solid",
];

const SIZES = [
  "btn--small",
  "btn--medium"
];

const Button = ({ children, type, onClick, buttonStyle, buttonSize }) => {

  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

  return (
    <button onClick={onClick} type={type}>
      {children}
    </button>
  )
};


export default Button;
