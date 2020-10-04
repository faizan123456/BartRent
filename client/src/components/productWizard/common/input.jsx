import React from "react";
const Input = ({ input, label, type, meta: { touched, error } }) => {
  console.log(
    "input=>",
    input,
    "label=>",
    label,
    "type=>",
    type,
    "meta",
    touched,
    error
  );
  return (
    <div className="form-group">
      <label htmlFor={input.name}>{label}</label>
      <input
        {...input}
        placeholder={label}
        type={type}
        className="form-control"
      />
      {touched && error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
