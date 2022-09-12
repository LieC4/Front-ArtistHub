import React from 'react'

const Input = React.forwardRef((props, ref) => {
    const { nameLabel, type, id, placeholder, keyState, setter, defaultValues } = props;

    const handleChange = (e) => {
        setter({ ...defaultValues, [e.target.name]: e.target.value });
    };
  return (
    <>
        <label style={labelStyle} htmlFor={id}>
            {nameLabel}
        </label>
    {type === "textarea" ? (
        <textarea 
            className='textarea_field' 
            ref={ref}
            role={id}
            value={keyState}
            onChange={handleChange}
            type={type}
            id={id}
            name={id}
            placeholder={placeholder}
            style={inputStyle}
        />
        ) : (
        <input
            ref={ref}
            role={id}
            value={keyState}
            onChange={handleChange}
            type={type}
            id={id}
            name={id}
            placeholder={placeholder}
            style={inputStyle}
        />
        )}
    </>
  );
});

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

export default Input