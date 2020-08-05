import React from "react";
<<<<<<< HEAD

const Select = ({ name, label, options, error, ...rest }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} {...rest} className="form-control">
        <option value="" />
        {options.map(option => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
=======
// const Select = ({error,name,label,onDropDown}) => {
//     return (

//         <div className="form-group">
//         <label htmlFor={name}>{label}</label>
//           <select
//           className="form-control"
//           id={name}
//            >
//             {onDropDown}
//          </select>
//         {error && <div className="alert alert-danger">{error}</div>}
//          </div>
//     );
//}

const Select = ({ name, label, options, error, ...rest }) => {
  return (
    <div className="input-field col s12">
      <label htmlFor={name}> {label} </label>
      {
        <select {...rest} id={name} name={name} className="browser-default">
          <option value="" />
          {options.map(item => (
            <option key={item._id} value={item._id}>
              {item.name}
            </option>
          ))}
        </select>
      }
>>>>>>> b5cb62e4032767fcb652a7fff5647a133f16b202
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};
<<<<<<< HEAD

=======
>>>>>>> b5cb62e4032767fcb652a7fff5647a133f16b202
export default Select;
