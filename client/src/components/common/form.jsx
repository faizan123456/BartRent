import React, { Component } from "react";
import Input from "./input";
import Joi from "joi-browser";
import Select from "./select";
class Form extends Component {
  state = {
    data: {},
    error: {}
  };
  validateMessage({ name, value }) {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  }
  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateMessage(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    // data.username=e.currentTarget.value;
    data[input.name] = input.value;
    this.setState({ data, errors });
  };
  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;
    //    console.log(error.error.details);
    // console.log(error.error.details.map(e=>console.log(e.message)));

    const errors = {};
    // console.log('item',item)
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;

    // const errors={};
    // const {dat}=this.state;
    // if(data.username.trim()=== '')
    // errors.username='User Name is required';

    // if(data.password.trim()=== '')
    // errors.password='User Name is required';

    // return  Object.keys(errors).length ===0 ? null: errors;
  };
  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    console.log(errors);
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
  };
  renderButton(label) {
    return (
      <button
        disabled={this.validate()} // return null or obj  null== false and obj == true;
        className="btn btn-primary"
      >
        {label}
      </button>
    );
  }
  renderInput(label, name, type = "text") {
    const { data, errors } = this.state;
    return (
      <Input
        type={type}
        name={name}
        onChange={this.handleChange}
        label={label}
        value={data[name]}
        error={errors[name]}
      />
    );
  }
  handleDropDown = () => {
    return (
      <React.Fragment>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </React.Fragment>
    );
    // const Genres={...this.state.genres}
    // console.log(Genres)
    // {Genres.map(genre=>(
    // <option>
    // {genre.name}
    // </option>)
    //  )}
  };
  renderSelect(label, name) {
    const { data, errors } = this.state;
    return (
      <Select
        name={name}
        genres={this.state.genres}
        onDropDown={this.handleChange}
        label={label}
        value={data[name]}
        error={errors[name]}
      />
    );
  }
}
export default Form;
