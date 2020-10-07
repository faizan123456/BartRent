import React from "react";
import TextField from "@material-ui/core/TextField";

const Date = ({ error, id, name, label, ...rest }) => {
  return (
    <div>
      <TextField
        {...rest}
        name={name}
        id={id}
        label={label}
        size="small"
        style={{ width: 210 }}
        variant="outlined"
        //defaultValue="1234-11-1212"
        InputLabelProps={{
          shrink: true,
        }}
      />
      {error && <div className="text-danger text-bold">{error}</div>}
    </div>
  );
};

export default Date;
