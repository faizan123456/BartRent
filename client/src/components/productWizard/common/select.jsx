import React from "react";
//name label options

const Select = ({ input, name, label, options, meta: { touched, error } }) => (
  <div className="form-group">
    {console.log("Select --option arr--->", options)}
    <label>{label}</label>
    <select {...input} className="form-control">
      <option value="">Select {name}...</option>
      {options.map((val) => (
        <option value={val._id} key={val._id}>
          {val.name}
        </option>
      ))}
    </select>
    {touched && error && <div className="alert alert-danger">{error}</div>}
  </div>
);
export default Select;
