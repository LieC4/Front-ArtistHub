import React from 'react';

const Input = React.forwardRef((props, ref, ...rest) => {
    const {label, type, name, onChange} = props
  
    return (
      <>
          <label style={labelStyle} htmlFor={label}>
              {label}
          </label>
          {type === "textarea" ? (
        <textarea 
            className='textarea_field' 
            ref={ref}
            style={inputStyle} 
            type={type} 
            placeholder={name} 
            name={name} 
            onChange={onChange}
            {...rest}
        />
        ) : (
        <input
            ref={ref}
            style={inputStyle} 
            type={type} 
            placeholder={name} 
            name={name} 
            onChange={onChange}
            {...rest}
        />
        )}
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

