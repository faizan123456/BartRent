import React from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./renderField";
import Input from "./common/input";
import Select from "./common/select";
import TextArea from "./common/textArea";
import FieldFileInput from "./common/image";
const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;

const WizardFormThirdPage = (props) => {
  const { handleSubmit, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <h2>Step #04</h2>
      <div className="container">
        <Field
          name="postalCode"
          type="text"
          component={Input}
          label="Postal Code"
        />
        <Field
          name="city"
          options={[
            { name: "Lahore", _id: 1 },
            { name: "Karach", _id: 2 },
            { name: "Gujranwala", _id: 3 },
            { name: "Sialkot", _id: 4 },
          ]}
          component={Select}
          label="City"
        />

        <Field
          name="fullAddress"
          labe="Full Address"
          component={TextArea}
          placeholder="Full Address"
        />
        <div>
          <button type="button" className="previous" onClick={previousPage}>
            Previous
          </button>
          <button type="submit" className="next">
            Next
          </button>
        </div>
        {/* <div>
          <button type="button" className="previous" onClick={previousPage}>
            Previous
          </button>
          <button type="submit" className="next">
            Next
          </button>
        </div> */}
      </div>
    </form>
  );
};

export default reduxForm({
  form: "wizard", //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormThirdPage);

////////////
