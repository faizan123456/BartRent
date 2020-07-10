import React from 'react';
const Select = ({error,name,label,onDropDown}) => {
    return (  
        
        <div className="form-group">
        <label htmlFor={name}>{label}</label>
          <select
          className="form-control"
          id={name}
           >
            {onDropDown}
         </select>
        {error && <div className="alert alert-danger">{error}</div>}
         </div>
    );
}
export default Select;