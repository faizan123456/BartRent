import React from "react";
const Image = ({ error, name, defaultVal, label, ...rest }) => {
  console.log("rest...= ", defaultVal)
  
  return (
    // <div>Loading...</div>
    <div className="form-group">
      
      <label htmlFor={name}>{label}</label><br />      
      {
        (defaultVal) ?        
        <div>
          <input type="file" {...rest} className="btn btn-warning" name={name} id={name} multiple="multiple" />
          <span>{defaultVal} images selected</span>          
        </div> :
          <input type="file" {...rest} className="btn btn-warning" name={name} id={name} multiple="multiple" required />        
      } 

      {error && <div className="alert alert-danger">{error}</div>}
      
    </div>
    
     // autoFocus 
  );
};

export default Image;


