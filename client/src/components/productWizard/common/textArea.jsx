import React from "react";
const TextArea = ({ input, name, label, meta: { touched, error } }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <textarea {...input} className="form-control" id={name} rows="3" />
      {touched && error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default TextArea;
