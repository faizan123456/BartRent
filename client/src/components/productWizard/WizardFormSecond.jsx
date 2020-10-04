import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./renderField";
import Input from "./common/input";
import Select from "./common/select";
import textArea from "./common/textArea";
import FieldFileInput from "./common/image";
import FileInput from "./common/imageWithDropZone";
import UploadForm from "./containers/UploadForm";
import DropZoneField from "./components/DropzoneField/dropzoneField";
import { connect } from "react-redux";
import { fetchCategories } from "../../redux/categories/categories.action";

const imageIsRequired = (value) => (!value ? "Required" : undefined);

// const renderError = ({ meta: { touched, error } }) =>
//   touched && error ? <span>{error}</span> : false;

class WizardFormSecond extends Component {
  state = { imageFile: [] };

  componentDidMount() {
    this.props.fetchCategories();
  }

  //start here
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

  //end here

  handleFormSubmit = (formProps) => {
    console.log("image formprops", formProps);
    const fd = new FormData();
    fd.append("imageFile", formProps.imageToUpload.file);
    // append any additional Redux form fields
    // create an AJAX request here with the created formData

    alert(JSON.stringify(formProps, null, 4));
  };

  handleOnDrop = (newImageFile, onChange) => {
    console.log("handle On Drop ", newImageFile);
    //For Muliple files
    // const files = newImageFile.target.files;
    // // var files = event.target.files;
    // if (this.maxSelectFile(event) && this.checkMimeType(event)) {
    //   this.setState({ data: { ...this.state.data, images: files } });
    // }

    //For Single File upload

    //my old code
    var imgArray = [];
    for (var x = 0; x < newImageFile.length; x++) {
      console.log("StateForm... = ", newImageFile[x]);

      const imageFile = {
        file: newImageFile[x],
        name: newImageFile[x].name,
        preview: URL.createObjectURL(newImageFile[x]),
        size: newImageFile[x].size,
      };
      console.log("i m g file", imageFile);

      imgArray.push(imageFile);
      //  const imgForm = formData.append('images', this.state.data.images[x])
      // console.log("imgForm...= ", imgForm);
      //count++
    }
    this.setState({ imageFile: [imgArray] }, () => onChange(imgArray));

    // old code end

    // const imageFile = {
    //   file: newImageFile[0],
    //   name: newImageFile[0].name,
    //   preview: URL.createObjectURL(newImageFile[0]),
    //   size: newImageFile[0].size,
    // };

    // this.setState({ imageFile: [imageFile] }, () => onChange(imageFile));
  };

  resetForm = () => this.setState({ imageFile: [] }, () => this.props.reset());

  //   const { handleSubmit, previousPage } = this.props;
  render() {
    console.log("State img", this.state.imageFile);

    // console.log("--->SWAp  Types---->", this.props.ProductCategories);
    // console.log(
    //   "---> Selected Transaction Types---->",
    //   this.props.SelectedTransaction
    // );

    const { handleSubmit, previousPage } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <h2>Step #02</h2>
        <div className="container">
          <Field name="title" type="text" component={Input} label="Title" />
          {/* <Field
            name="numberInStock"
            type="text"
            component={Input}
            label="Quantity"
          /> */}

          {this.props.SelectedTransaction === "5f723fb0e0607f2f3408d05d" ? (
            <Field
              name="numberInStock"
              type="text"
              component={Input}
              label="Quantity"
            />
          ) : (
            ""
          )}

          <Field
            name="category"
            options={this.props.ProductCategories}
            component={Select}
            label="Category"
          />
          <Field
            name="description"
            type="text"
            component={textArea}
            label="Description"
          />
          {/* <UploadForm /> */}
          <Field
            name="imageToUpload"
            component={DropZoneField}
            type="file"
            imagefile={this.state.imageFile}
            handleOnDrop={this.handleOnDrop}
            validate={[imageIsRequired]}
          />
          <div>
            <button type="button" className="previous" onClick={previousPage}>
              Previous
            </button>
            <button type="submit" className="next">
              Next
            </button>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("map State To Props", state.categories);
  return {
    SelectedTransaction:
      state.form.wizard &&
      state.form.wizard.values &&
      state.form.wizard.values.transaction,
    ProductCategories: Object.values(state.categories),
  };
};

const secondFormWrapped = reduxForm({
  form: "wizard", //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormSecond);

export default connect(mapStateToProps, { fetchCategories })(secondFormWrapped);
