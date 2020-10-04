import React, { Component } from "react";
export default class FieldFileInput extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    console.log("img on change", e.target.files);
    const {
      input: { onChange }
    } = this.props;
    onChange(e.target.files[0]);
  }

  render() {
    const {
      input: { value }
    } = this.props;
    const { input, label, required, meta } = this.props; //whatever props you send to the component from redux-form Field
    console.log("input", input);
    return (
      <div>
        <label>{label}</label>
        <div>
          <input
            // {...input}
            type="file"
            accept=".jpg, .png, .jpeg"
            onChange={this.onChange}
          />
        </div>
      </div>
    );
  }
}
// import React from "react";
// const Image = ({ input, name, defaultVal, label, ...rest }) => {
//   console.log("rest...= ", defaultVal);

//   return (
//     // <div>Loading...</div>
//     <div className="form-group">
//       <label htmlFor={name}>{label}</label>
//       <br />
//       {defaultVal ? (
//         <div>
//           <input
//             type="file"
//             {...rest}
//             className="btn btn-warning"
//             name={name}
//             id={name}
//             multiple="multiple"
//           />
//           <span>{defaultVal} images selected</span>
//         </div>
//       ) : (
//         <input
//           type="file"
//           {...rest}
//           className="btn btn-warning"
//           name={name}
//           id={name}
//           multiple="multiple"
//           required
//         />
//       )}

//       {error && <div className="alert alert-danger">{error}</div>}
//     </div>

//     // autoFocus
//   );
// };

// export default Image;
