import React from "react";
const Image = ({ error, name, label, ...rest }) => {

  return (
    // <div>Loading...</div>
    <div className="form-group">
      <label htmlFor={name}>{label}</label><br />
      <input type="file" {...rest} className="" name={name} id={name} multiple="multiple" required />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
     // autoFocus 
  );
};

export default Image;


// return this.data.emailGroup.emails.map((email, index) => {
//   return (
//       <div key={index} className="input-group">
//           <input type="text"
//                  className="form-control"
//                  onChange={self.handleEmailListChange.bind(this, index)} value={email}/>
//       </div>
//   );
// });