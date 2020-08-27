import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
import Select from "./select";
import Image from "./image";
//import ImageUploader from 'react-images-upload';

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };  

  maxSelectFile=(event)=>{
    let files = event.target.files // create file object
        if (files.length > 10) { 
           const msg = 'Only 3 images can be uploaded at a time'
           event.target.value = null // discard selected file
           console.log(msg)
          return false;
      }
    return true;
 }
  checkMimeType=(event)=>{
  //getting file object
  let files = event.target.files 
  //define message container
  let err = ''
  // list allow mime type
 const types = ['image/png', 'image/jpeg', 'image/gif']
  // loop access array
  for(var x = 0; x<files.length; x++) {
   // compare file type find doesn't matach
       if (types.every(type => files[x].type !== type)) {
       // create error message and assign to container   
       err += files[x].type+' is not a supported format\n';
     }
   };
 if (err !== '') { // if message not same old that mean has error 
      event.target.value = null // discard selected file
      console.log(err)
       return false; 
  }
 return true;
}

  checkFileSize=(event)=>{
  let files = event.target.files
  let size = 15000 
  let err = ""; 
  for(var x = 0; x<files.length; x++) {
  if (files[x].size > size) {
   err += files[x].type+'is too large, please pick a smaller file\n';
 }
};
if (err !== '') {
  event.target.value = null
  console.log(err)
  return false
}
return true;
}

  handleImage = (event) => {
    console.log("img....= ", event.target.files);
    var files = event.target.files
    if(this.maxSelectFile(event) && this.checkMimeType(event) ){
       this.setState({ data: { ...this.state.data, images: files } })
  }
};


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

  handleChange = ({ currentTarget: input }) => {
    
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;   
    
    this.setState({ data, errors });
    console.log('all PROPERTY', this.state.data);
    
  };

  renderButton(label) {
    return (
      <button
        disabled={this.validate()}
        className={label === "Register" ? "btn btn-success" : "btn btn-primary"}
      >
        {label}
      </button>
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

  renderImage(name, label, type = "file") {
    const { data, errors } = this.state;
    
    
    // if(!data[name]) {
    //   return <div>Loading....</div>
    // }
    
    if(data[name]) {
      var mydata = Object.values(data[name])
      console.log('imgaes', mydata[1] )
      console.log('Hoja Yar... ', data[name])
      } 

      return (
        <Image
          type={type}
          name={name}
          //value={mydata ? mydata[1] : ""}
          label={label}
          onChange={this.handleImage}
          error={errors[name]}
          className="btn btn-outline-primary"
          accept="image/*"
        />
       )  
}

  renderInput(name, label, type = "text") {
    const { data, errors } = this.state;

    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

}

export default Form;
