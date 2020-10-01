import React from "react";

import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
//import Select from "@material-ui/core/Select";

import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Select = ({ name, label, id, options, error, ...rest }) => {
  const classes = useStyles();

  return (
    <div>
      {/* <InputLabel id="demo-simple-select-label">{label}</InputLabel> */}
      <TextField
        name={name}
        select
        {...rest}
        size="small"
        label={label}
        style={{ width: 196 }}
        variant="outlined"
        labelId="demo-simple-select-label"
        id={id}
        //value=""
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </TextField>

      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};
export default Select;

/* <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} {...rest} className="form-control">
        <option value="" />
        {options.map((option) => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div> */
