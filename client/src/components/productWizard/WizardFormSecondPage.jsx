import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./renderField";
import Input from "./common/input";
import Select from "./common/select";
import textArea from "./common/textArea";
import FieldFileInput from "./common/image";
import FileInput from "./common/imageWithDropZone";
import UploadForm from "./containers/UploadForm";
const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;

const WizardFormSecondPage = props => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h2>Step #02</h2>
      <div className="container">
        <Field name="title" type="text" component={Input} label="Title" />
        <Field
          name="numberInStock"
          type="text"
          component={Input}
          label="No. In Stock"
        />

        <Field
          name="category"
          options={["Clothing", "Technology"]}
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

        {/* <FileInput
          name="add_photo"
          label="Others:"
          classNameLabel="file-input-label"
          className="file-input"
          dropzone_options={{
            multiple: false,
            accept: "image/*"
          }}
        >
          <span>Add more</span>
        </FileInput> */}
        {/* <Field
          name="image"
          type="file"
          component={FieldFileInput}
          label="image"
        /> */}

        {/* <div>
          <label>Sex</label>
          <div>
            <label>
              <Field name="sex" component="input" type="radio" value="male" />{" "}
              Male
            </label>
            <label>
              <Field name="sex" component="input" type="radio" value="female" />{" "}
              Female
            </label>
            <label>
              <Field name="sex" component="input" type="radio" value="other" />{" "}
              Other
            </label>
            <Field name="sex" component={renderError} />
          </div>
        </div> */}
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
};

export default reduxForm({
  form: "wizard", //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormSecondPage);
