import React  from "react";

const InputField = ({ label, name, placeholder, type }) => (
  <div className="input_group">
    {label && <label htmlFor="input-field">{label}</label>}
    <input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
    />
  </div>
);

export default InputField;