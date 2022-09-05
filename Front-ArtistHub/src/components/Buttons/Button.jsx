import React from "react";

const Button = ({btnFunction, text}) => {
 return 
 <button onClick={() => btnFunction}>{text}</button>
};

export default Button;