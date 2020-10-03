import React from "react";
import TextField from "@material-ui/core/TextField";

const TextArea = ({ error, name, id, value, label, ...rest }) => {
  return (
    <div>
      <TextField
        {...rest}
        name={name}
        id={id}
        label={label}
        multiline
        rows={4}
        //cols={30}
        style={{ width: 455 }}
        //labelWidth={60}
        placeholder="Try to give your exact postal address..."
        variant="outlined"
      />
      {error && <div className="text-danger text-bold">{error}</div>}
    </div>
  );
};

export default TextArea;

{
  /* <div className="form-group">
      <label htmlFor={name}>
        <b>{label}</b>
      </label>
      <textarea
        {...rest}
        name={name}
        placeholder="Try to give your exact postal address..."
        id={name}
        //variant="outlined"
        className="form-control"
      >
        {value}
      </textarea>
      {error && <div className="text-danger text-bold">{error}</div>}
      
    </div>
     */
}
