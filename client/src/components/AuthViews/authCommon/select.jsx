// import React from "react";
// import FormControl from "@material-ui/core/FormControl";
// import MenuItem from "@material-ui/core/MenuItem";
// import { makeStyles } from "@material-ui/core/styles";
// import InputLabel from "@material-ui/core/InputLabel";
// //import Select from "@material-ui/core/Select";

// import TextField from "@material-ui/core/TextField";

// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// }));

// const Select = ({ name, label, id, options, error, ...rest }) => {
//   const classes = useStyles();
//   console.log("options", options, id);

//   return (
//     <div>
//       {/* <InputLabel id="demo-simple-select-label">{label}</InputLabel> */}
//       <TextField
//         name={name}
//         select
//         // id="select"
//         {...rest}
//         size="small"
//         label={label}
//         style={{ width: 210 }}
//         variant="outlined"
//         labelId="demo-simple-select-label"
//         id={id}
//         //value=""
//       >
//         <MenuItem value="">
//           <em>Select</em>
//         </MenuItem>
//         {options.map((i) => (
//           <MenuItem key={i._id} value={i._id}>
//             {i.name}/
//           </MenuItem>
//         ))}
//         {/* <MenuItem value={10}>Ten</MenuItem>
//         <MenuItem value={20}>Twenty</MenuItem>
//         <MenuItem value={30}>Thirty</MenuItem> */}
//       </TextField>

//       {error && <div className="alert alert-danger">{error}</div>}
//     </div>
//   );
// };
// export default Select;

// /* <div className="form-group">
//       <label htmlFor={name}>{label}</label>
//       <select name={name} id={name} {...rest} className="form-control">
//         <option value="" />
//         {options.map((option) => (
//           <option key={option._id} value={option._id}>
//             {option.name}
//           </option>
//         ))}
//       </select>
//       {error && <div className="alert alert-danger">{error}</div>}
//     </div> */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { values } from "lodash";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
// const handleChange = (event) => {
//   console.log(event.target.value);
// };

const SelectOption = ({ name, label, options, error, value, onChange }) => {
  //   console.log("Sellect options", name, label, options, value, onChange);
  //   //   console.log("Sellect rest", rest);
  //   const handleChange = (event) => {
  //     console.log(event.target.value);
  //     console.log(event.target);
  //   };

  const classes = useStyles();
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          name={name}
          id={name}
          value={value}
          onChange={onChange}
        >
          <MenuItem value="">
            <em>select</em>
          </MenuItem>
          {options.map((option) => (
            <MenuItem key={option._id} value={option._id}>
              {option.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default SelectOption;
