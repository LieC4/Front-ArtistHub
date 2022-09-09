import React  from "react";

const InputField = ({ value, label, name, placeholder, type, }) => (
  <div className="input_group">
    {label && <label htmlFor="input-field">{label}</label>}
    <input
      value={value}
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
    />
  </div>
);

export default InputField;