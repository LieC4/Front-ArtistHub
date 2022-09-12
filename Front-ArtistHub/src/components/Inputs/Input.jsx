import React, {Fragment, useState} from 'react';

const Input = React.forwardRef((props, ref, ...rest) => {
    const {label, type, name, onChange, placeholder} = props
  
    return (
      <>
          <label style={labelStyle} htmlFor={label}>
              {label}
          </label>
          <input
              ref={ref}
              style={inputStyle} 
              type={type} 
              name={name}
              placeholder={placeholder} 
              onChange={onChange}
              {...rest}
          />
      </>
    );
  });
 
  export default Input

const labelStyle = {
    marginTop: 5
};

const inputStyle = {
    outlineStyle: "none",
    borderRadius: "4px",
    border: "solid 1px var(--text-primary)",
    borderBottomWidth: "2px",
    transition: "all 0.3s ease",
    padding: "5px",
    width: "200px",  
}

