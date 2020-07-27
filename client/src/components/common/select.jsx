import React from "react";
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
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};
export default Select;
