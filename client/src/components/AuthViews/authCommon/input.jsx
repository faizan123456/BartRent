import React from "react";
import TextField from "@material-ui/core/TextField";

const Input = ({ error, name, label, ...rest }) => {
  return (
    <div>
      {/* <label htmlFor={name}>{label}</label> */}
      {/* <input {...rest} name={name} id={name} className="form-control" /> */}
      {error && <div className="text-danger text-bold">{error}</div>}
      <TextField
        {...rest}
        name={name}
        size="small"
        label={label}
        variant="outlined"
      />
      {/* <TextField id="filled-password-input" size="small" className="mt-3" label="Password" type="password" autoComplete="current-password" variant="outlined" /> */}
    </div>
    // autoFocus
    // ref={this.username}
  );
};

export default Input;
