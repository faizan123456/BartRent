import React, { Component } from "react";
import * as userService from "../../services/userService";

import Input from "./input";
import Select from "./select";
import Joi from "joi-browser";

class Form extends Component {
  state = {
    countries: [],
    cities: [],
    states: [],
    data: {
      countryId: ""
    },
    errors: {}
  };

  // populateCountries = async () => {
  //   const { data: countries } = await userService.getCountries();
  //   this.setState({ countries });
  // };
  populateStates = async () => {
    const { data: states } = await userService.getStates();
    this.setState({ states });
  };
  populateCities = async () => {
    const { data: cities } = await userService.getCities();
    this.setState({ cities });
  };
  // componentDidUpdate(){

  // }
  // async componentDidMount() {
  //   await this.populateCountries();
  //   await this.populateStates();
  //   await this.populateCities();
  // }

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  validateProperty = ({ name, value }) => {
    console.log("name with value ", name, value);
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };
  changeCity(value) {
    var city = [...this.state.cities];

    var cities = city.filter(c => value.includes(c.s_id));
    console.log("gg ", cities, value, city);
    this.setState({ cities });
  }

  // async changeStates(value) {
  //   const { data: states } = await userService.getStates(value);
  //   console.log("change State", states);
  //   this.setState({ states });
  //   //  var States = [...this.state.states];
  //   //  var states = States.filter(s => value.includes(s.c_id));
  //   //  this.setState({ states });
  // }
  handleQuery = async ({ name, value }) => {
    if (name === "countryId") {
      let cId = value;
      this.setState({ countryId: cId });
      console.log("inside", cId);
      const { data: states } = await userService.getStates(cId);
      console.log("change State", states);
      this.setState({ states }); 
    }

    if (name === "stateId") {
      const stateId = value;
      const { data: cities } = await userService.getCities(stateId);
      this.setState({ cities });
       
    }
    // const filtered_people = this.state.states.filter(s => s.includes( s._id) && person.gender === 'm')

  };
  handleChange = ({ currentTarget: input }) => {
  
    const errorMessage = this.validateProperty(input);
    this.handleQuery(input);
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
    // console.log("H change state", this.state);
  };

  renderButton = label => {
    return (
      <button
        onClick={this.handleSubmit}
        disabled={this.validate()}
        className="btn btn-primary"
      >
        {label}
      </button>
    );
  };

  renderInput = (name, label, type = "text") => {
    const { data, errors } = this.state;
    return (
      <Input
        name={name}
        label={label}
        type={type}
        error={errors[name]}
        value={data[name]}
        onChange={this.handleChange}
      />
    );
  };

  renderSelect(name, label, options) {
    const { data, errors } = this.state;

    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
}

export default Form;
