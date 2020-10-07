import React from "react";
const TextArea = ({ error, name, label, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <textarea {...rest} name={name} id={name} className="form-control">
        {value}
      </textarea>   
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
    // autoFocus
    // ref={this.username}
  );
};

export default TextArea;
