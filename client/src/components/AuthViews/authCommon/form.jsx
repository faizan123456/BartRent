import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Joi from "joi-browser";
import * as userService from "../../../services/userService";

import Input from "./input";
import Select from "./select";
import Image from "./image";
import TextArea from "./textarea";
import Date from "./date";
//import ImageUploader from 'react-images-upload';

class Form extends Component {
  state = {
    countries: [],
    cities: [],
    states: [],
    data: {
      countryId: "",
    },
    //loginToggle: true,
    //registerToggle: true,
    errors: {},
  };

  maxSelectFile = (event) => {
    let files = event.target.files; // create file object
    if (files.length > 10) {
      const msg = "Only 3 images can be uploaded at a time";
      event.target.value = null; // discard selected file
      console.log(msg);
      return false;
    }
    return true;
  };
  checkMimeType = (event) => {
    //getting file object
    let files = event.target.files;
    //define message container
    let err = "";
    // list allow mime type
    const types = ["image/png", "image/jpeg", "image/gif"];
    // loop access array
    for (var x = 0; x < files.length; x++) {
      // compare file type find doesn't matach
      if (types.every((type) => files[x].type !== type)) {
        // create error message and assign to container
        err += files[x].type + " is not a supported format\n";
      }
    }
    if (err !== "") {
      // if message not same old that mean has error
      event.target.value = null; // discard selected file
      console.log(err);
      return false;
    }
    return true;
  };

  checkFileSize = (event) => {
    let files = event.target.files;
    let size = 15000;
    let err = "";
    for (var x = 0; x < files.length; x++) {
      if (files[x].size > size) {
        err += files[x].type + "is too large, please pick a smaller file\n";
      }
    }
    if (err !== "") {
      event.target.value = null;
      console.log(err);
      return false;
    }
    return true;
  };

  handleImage = (event) => {
    console.log("img....= ", event.target.files);
    var files = event.target.files;
    if (this.maxSelectFile(event) && this.checkMimeType(event)) {
      this.setState({ data: { ...this.state.data, images: files } });
    }
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
    console.log("Validate... ", this.state.data);
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    console.log("name with value", name, value);
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };
  changeCity(value) {
    var city = [...this.state.cities];

    var cities = city.filter((c) => value.includes(c.s_id));
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
      console.log("Change State", states);
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
    const errors = { ...this.state.errors };

    const errorMessage = this.validateProperty(input);

    //update the state errors
    if (errorMessage) {
      errors[input.name] = errorMessage;
    } else {
      delete errors[input.name];
    }
    this.setState({ errors });
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    this.handleQuery(input);

    // //update the state errors
    // if (errorMessage) {
    //   errors[input.name] = errorMessage;
    // } else {
    //   delete errors[input.name];
    // }

    //this.setState({ errors });

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
    data[input.name] = input.value;

    this.setState({ data, errors });
    console.log("all PROPERTY", this.state.data);

    data[input.name] = input.value;
    this.setState({ data });
    // console.log("H change state", this.state);
  };

  renderButton(label) {
    return (
      <div>
        <button
          disabled={this.validate()}
          className={
            label === "Register"
              ? "btn btn-success btn-sm mt-2"
              : "btn btn-primary btn-sm mt-2"
          }
        >
          {label}
        </button>{" "}
        &nbsp; &nbsp; &nbsp;
      </div>
    );
  }

  renderCheckBox(label, error) {
    return (
      <div className="form-check-inline">
        <label className="form-check-label">
          <input
            type="checkbox"
            onClick={this.handleChange}
            className="form-check-input mt-2"
            value=""
          />{" "}
          <b>{label}</b>
        </label>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    );
  }

  renderSelect(name, label, id, className, options) {
    const { data, errors } = this.state;

    return (
      <Select
        name={name}
        id={id}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        className={className}
        error={errors[name]}
        style={{ width: 40 }}
      />
    );
  }

  renderImage(name, label, type = "file") {
    const { data, errors } = this.state;

    if (data[name]) {
      var mydata = data[name].length;
      console.log("imgaes", mydata);
    }

    return (
      <Image
        type={type}
        name={name}
        //value={data[name] && mydata.length || ""}
        defaultVal={(mydata && mydata) || null}
        label={label}
        onChange={this.handleImage}
        error={errors[name]}
        accept="image/*"
      />
    );
  }

  renderInput(name, label, id, type, className) {
    const { data, errors } = this.state;

    return (
      <Input
        type={type}
        name={name}
        id={id}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
        className={className}
      />
    );
  }

  renderDate(name, label, id, type, className) {
    const { data, errors } = this.state;

    return (
      <Date
        type={type}
        name={name}
        id={id}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
        className={className}
      />
    );
  }

  renderTextArea(name, label, id, className) {
    const { data, errors } = this.state;
    return (
      <TextArea
        name={name}
        id={id}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
        className={className}
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
