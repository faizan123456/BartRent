import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./renderField";
import Select from "./common/select";

import { fetchTransactions } from "../../redux/transaction/transaction.action";
import { fetchSwapTypes } from "../../redux/swapTypes/swapTypes.action";
import { connect } from "react-redux";
// const WizardFormFirstPage = (props) => {
//   const { handleSubmit } = props;
//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Step #01</h2>
//       <div className="container">
//         <Field
//           name="transaction"
//           options={["Swap/Bart", "Rent"]}
//           component={Select}
//           label="Transaction Type"
//         />
//         <Field
//           name="swapType"
//           options={[
//             "Product",
//             "Service",
//             "Product To Service",
//             "Service To Product",
//           ]}
//           component={Select}
//           label="Swap Type"
//         />
//         <div>
//           <button type="submit" className="next btn btn-primary">
//             Next
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// };

class WizardFormFirstPage extends Component {
  state = {};
  componentDidMount() {
    // console.log("Component Did Mount", this.props.fetchTransactions());
    this.props.fetchTransactions();
    this.props.fetchSwapTypes();
  }

  // renderPageFields = () => {
  //   this.props.transaction === "5f723fb0e0607f2f3408d05d" ? (
  //     <Field
  //       name="swapType"
  //       options={this.props.SwapTypes}
  //       component={Select}
  //       label="Swap Type"
  //     />
  //   ) : (
  //     <div>
  //       <Field
  //         name="transaction"
  //         options={this.props.TransactionTypes}
  //         component={Select}
  //         label="Transaction Type"
  //       />
  //       <Field
  //         name="swapType"
  //         options={this.props.SwapTypes}
  //         component={Select}
  //         label="Swap Type"
  //       />
  //     </div>
  //   );
  // };

  render() {
    console.log("--->Transaction Types---->", this.props.TransactionTypes);
    console.log("--->SWAp  Types---->", this.props.fetchSwapTypes);
    console.log(
      "---> Selected Transaction Types---->",
      this.props.SelectedTransaction
    );

    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <h2>Step #01</h2>

        <div className="container">
          <Field
            name="transaction"
            options={this.props.TransactionTypes}
            component={Select}
            label="Transaction Type"
          />
          {this.props.SelectedTransaction !== "5f723fb0e0607f2f3408d05d" ? (
            <Field
              name="swapType"
              options={this.props.SwapTypes}
              component={Select}
              label="Swap Type"
            />
          ) : (
            ""
          )}
          {/* <Field
            name="swapType"
            options={this.props.SwapTypes}
            component={Select}
            label="Swap Type"
          /> */}
          <div>
            <button type="submit" className="next btn btn-primary">
              Next
            </button>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("map State To Props", state);
  return {
    SelectedTransaction:
      state.form.wizard &&
      state.form.wizard.values &&
      state.form.wizard.values.transaction,
    TransactionTypes: Object.values(state.transaction),
    SwapTypes: Object.values(state.swapType),
  };
};

const FirstPageWrapped = reduxForm({
  form: "wizard", // <------ same form name
  destroyOnUnmount: false, // <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormFirstPage);

export default connect(mapStateToProps, { fetchTransactions, fetchSwapTypes })(
  FirstPageWrapped
);
