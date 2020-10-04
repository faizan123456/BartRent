import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import Select from "./common/select";
import TextArea from "./common/textArea";
import Input from "./common/input";
import { connect } from "react-redux";

class WizardFormFourthPage extends Component {
  state = {};
  render() {
    const { handleSubmit, pristine, previousPage, submitting } = this.props;
    console.log(
      "---> Selected Transaction Types---->",
      this.props.SelectedTransaction
    );
    return (
      <form onSubmit={handleSubmit}>
        <h2>Step #05</h2>
        <div className="container">
          <Field
            name="swapValue"
            type="text"
            component={Input}
            label="swap Value /Rental Value"
          />
          {this.props.SelectedTransaction === "5f723fb0e0607f2f3408d05d" ? (
            <Field
              name="rentalFrequency"
              options={[
                { name: "Hourly", _id: "5f74e97d9bc86837405b137d" },
                { name: "Daily", _id: "5f74e97d9bc86837405b137e" },
                { name: "Weekly", _id: "5f74e97d9bc86837405b137f" },
                { name: "Monthly", _id: "5f74e97d9bc86837405b1380" },
              ]}
              component={Select}
              label="Renal plan"
            />
          ) : (
            ""
          )}
          {/* <Field
          name="rentalFrequency"
          options={[
            { name: "Hourly", _id: "5f74e97d9bc86837405b137d" },
            { name: "Daily", _id: "5f74e97d9bc86837405b137e" },
            { name: "Weekly", _id: "5f74e97d9bc86837405b137f" },
            { name: "Monthly", _id: "5f74e97d9bc86837405b1380" },
          ]} */}
          {/* component={Select}
        label="Rental Frequency" /> */}
          <div>
            <button type="button" className="previous" onClick={previousPage}>
              Previous
            </button>
            <button type="submit" disabled={pristine || submitting}>
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }
}

// const WizardFormFourthPage = (props) => {
//   const { handleSubmit, pristine, previousPage, submitting } = props;
//   console.log(
//     "---> Selected Transaction Types---->",
//     this.props.SelectedTransaction
//   );
//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Step #05</h2>
//       <div className="container">
//         <Field
//           name="swapValue"
//           type="text"
//           component={Input}
//           label="swap Value /Rental Value"
//         />
//         {/* {this.props.SelectedTransaction === "5f723fb0e0607f2f3408d05d" ? (
//           <Field
//             name="rentalFrequency"
//             options={[
//               { name: "Hourly", _id: "5f74e97d9bc86837405b137d" },
//               { name: "Daily", _id: "5f74e97d9bc86837405b137e" },
//               { name: "Weekly", _id: "5f74e97d9bc86837405b137f" },
//               { name: "Monthly", _id: "5f74e97d9bc86837405b1380" },
//             ]}
//             component={Select}
//             label="Swap Type"
//           />
//         ) : (
//           ""
//         )} */}
//         {/* <Field
//           name="rentalFrequency"
//           options={[
//             { name: "Hourly", _id: "5f74e97d9bc86837405b137d" },
//             { name: "Daily", _id: "5f74e97d9bc86837405b137e" },
//             { name: "Weekly", _id: "5f74e97d9bc86837405b137f" },
//             { name: "Monthly", _id: "5f74e97d9bc86837405b1380" },
//           ]} */}
//         {/* component={Select}
//         label="Rental Frequency" /> */}
//         <div>
//           <button type="button" className="previous" onClick={previousPage}>
//             Previous
//           </button>
//           <button type="submit" disabled={pristine || submitting}>
//             Submit
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// };

const mapStateToProps = (state) => {
  console.log("map State To Props", state);
  return {
    SelectedTransaction:
      state.form.wizard &&
      state.form.wizard.values &&
      state.form.wizard.values.transaction,
  };
};

const wizardFourthPageWrapped = reduxForm({
  form: "wizard", //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormFourthPage);

export default connect(mapStateToProps)(wizardFourthPageWrapped);
