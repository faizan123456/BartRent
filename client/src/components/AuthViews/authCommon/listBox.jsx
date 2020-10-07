import React, { Component } from "react";

class ListBox extends Component {
  render() {
    const { name, label, options, error, ...rest } = this.props;
    console.log(options);
    return (
      <div className="input-field col s12">
        {/* <label htmlFor={name}> {label} </label> */}

        <select id="" className="browser-default">
          <option value="" />
          <option value="1">Pak</option>
          <option value="2">Ind</option>
          <option value="3">Ban</option>
        </select>

        {/* {
          <select {...rest} id={name} className="browser-default">
            <option value="" />
            {options.map(item => (
              <option key={item._id} value={item._id}>
                {item.name}
              </option>
            ))}
          </select>
        } */}
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    );
  }
}

export default ListBox;
