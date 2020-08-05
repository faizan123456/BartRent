import React, { Component } from "react";
<<<<<<< HEAD
import Joi from "joi-browser";
import Input from "./input";
import Select from "./select";
=======

import Input from "./input";
import Select from "./select";
import Joi from "joi-browser";
>>>>>>> b5cb62e4032767fcb652a7fff5647a133f16b202

class Form extends Component {
  state = {
    data: {},
<<<<<<< HEAD
    errors: {},
=======
    errors: {}
>>>>>>> b5cb62e4032767fcb652a7fff5647a133f16b202
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
<<<<<<< HEAD
    for (let item of error.details) errors[item.path[0]] = item.message;
=======
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }
>>>>>>> b5cb62e4032767fcb652a7fff5647a133f16b202
    return errors;
  };

  validateProperty = ({ name, value }) => {
<<<<<<< HEAD
=======
    console.log("name with value ", name, value);
>>>>>>> b5cb62e4032767fcb652a7fff5647a133f16b202
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

<<<<<<< HEAD
  handleSubmit = (e) => {
=======
  handleSubmit = e => {
>>>>>>> b5cb62e4032767fcb652a7fff5647a133f16b202
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
<<<<<<< HEAD
    const dos = this.doSubmit();
    console.log("handle...", dos);
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
  };

  renderButton(label) {
    return (
      <button
        disabled={this.validate()}
        className={label === "Register" ? "btn btn-success" : "btn btn-primary"}
=======

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const errorMessage = this.validateProperty(input);
    const errors = { ...this.state.errors };
    //update the state errors
    if (errorMessage) {
      errors[input.name] = errorMessage;
    } else {
      delete errors[input.name];
    }
    this.setState({ errors });

    //binding view/model
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  renderButton = label => {
    return (
      <button
        onClick={this.handleSubmit}
        disabled={this.validate()}
        className="btn btn-primary"
>>>>>>> b5cb62e4032767fcb652a7fff5647a133f16b202
      >
        {label}
      </button>
    );
<<<<<<< HEAD
  }

  renderSelect(name, label, options) {
=======
  };

  renderInput = (name, label, type = "text") => {
>>>>>>> b5cb62e4032767fcb652a7fff5647a133f16b202
    const { data, errors } = this.state;

    return (
<<<<<<< HEAD
      <Select
        name={name}
        value={data[name]}
        label={label}
        className="form-control"
        options={options}
        onChange={this.handleChange}
=======
      <Input
        name={name}
        label={label}
        type={type}
>>>>>>> b5cb62e4032767fcb652a7fff5647a133f16b202
        error={errors[name]}
        value={data[name]}
        onChange={this.handleChange}
      />
    );
<<<<<<< HEAD
  }

  renderInput(name, label, type = "text") {
=======
  };

  renderSelect(name, label, options) {
>>>>>>> b5cb62e4032767fcb652a7fff5647a133f16b202
    const { data, errors } = this.state;

    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
<<<<<<< HEAD
        className="form-control"
        label={label}
=======
        label={label}
        options={options}
>>>>>>> b5cb62e4032767fcb652a7fff5647a133f16b202
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  // renderListBox = (name, label, options) => {
  //   const { data, errors } = this.state;
  //   return (
  //     <ListBox
  //       name={name}
  //       label={label}
  //       options={options}
  //       value={data[name]}
  //       error={errors[name]}
  //       onChange={this.handleChange}
  //     />
  //   );
  // };
}

export default Form;

// import React, { Component } from "react";
// import Input from "./input";
// import Joi from "joi-browser";
// import Select from "./select";
// class Form extends Component {
//   state = {
//     data: {},
//     error: {}
//   };
//   validateMessage({ name, value }) {
//     const obj = { [name]: value };
//     const schema = { [name]: this.schema[name] };
//     const { error } = Joi.validate(obj, schema);
//     return error ? error.details[0].message : null;
//   }
//   handleChange = ({ currentTarget: input }) => {
//     const errors = { ...this.state.errors };
//     const errorMessage = this.validateMessage(input);
//     if (errorMessage) errors[input.name] = errorMessage;
//     else delete errors[input.name];

//     const data = { ...this.state.data };
//     // data.username=e.currentTarget.value;
//     data[input.name] = input.value;
//     this.setState({ data, errors });
//   };
//   validate = () => {
//     const options = { abortEarly: false };
//     const { error } = Joi.validate(this.state.data, this.schema, options);
//     if (!error) return null;
//     //    console.log(error.error.details);
//     // console.log(error.error.details.map(e=>console.log(e.message)));

//     const errors = {};
//     // console.log('item',item)
//     for (let item of error.details) errors[item.path[0]] = item.message;
//     return errors;

//     // const errors={};
//     // const {dat}=this.state;
//     // if(data.username.trim()=== '')
//     // errors.username='User Name is required';

//     // if(data.password.trim()=== '')
//     // errors.password='User Name is required';

//     // return  Object.keys(errors).length ===0 ? null: errors;
//   };
//   handleSubmit = e => {
//     e.preventDefault();
//     const errors = this.validate();
//     console.log(errors);
//     this.setState({ errors: errors || {} });
//     if (errors) return;
//     this.doSubmit();
//   };
//   renderButton(label) {
//     return (
//       <button
//         disabled={this.validate()} // return null or obj  null== false and obj == true;
//         className="btn btn-primary"
//       >
//         {label}
//       </button>
//     );
//   }
//   renderInput(label, name, type = "text") {
//     const { data, errors } = this.state;
//     return (
//       <Input
//         type={type}
//         name={name}
//         onChange={this.handleChange}
//         label={label}
//         value={data[name]}
//         error={errors[name]}
//       />
//     );
//   }
//   handleDropDown = () => {
//     return (
//       <React.Fragment>
//         <option>1</option>
//         <option>2</option>
//         <option>3</option>
//         <option>4</option>
//         <option>5</option>
//       </React.Fragment>
//     );
//     // const Genres={...this.state.genres}
//     // console.log(Genres)
//     // {Genres.map(genre=>(
//     // <option>
//     // {genre.name}
//     // </option>)
//     //  )}
//   };
//   renderSelect(label, name) {
//     const { data, errors } = this.state;
//     return (
//       <Select
//         name={name}
//         genres={this.state.genres}
//         onDropDown={this.handleChange}
//         label={label}
//         value={data[name]}
//         error={errors[name]}
//       />
//     );
//   }
// }
// export default Form;
