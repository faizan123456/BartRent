import React, { Component } from "react";
import PropTypes from "prop-types";
import WizardFormFirstPage from "./WizardFormFirstPage";
import WizardFormSecondPage from "./WizardFormSecondPage";
import WizardFormThirdPage from "./WizardFormThirdPage.jsx";
import WizardFormBeforeThird from "./wizardFormbeforeThird.jsx";
import WizardFormFourthPage from "./WizardFormFourthPage";
import WizardFormSecond from "./WizardFormSecond";
import { createProduct } from "../../redux/products/product.action";
import { connect } from "react-redux";

class WizardForm extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 1,
    };
  }

  // componentDidMount() {
  //   this.props.fetchTransactions();
  // }
  // {this.props.SelectedTransaction !== "5f723fb0e0607f2f3408d05d" ? (

  nextPage() {
    console.log("In Next Page", this.props.SelectedTransaction);
    if (
      this.props.SelectedTransaction === "5f723fb0e0607f2f3408d05d" &&
      this.state.page == 2
    ) {
      console.log("If of redux main");
      this.setState({ page: this.state.page + 2 });
    } else {
      this.setState({ page: this.state.page + 1 });
      console.log("If of redux main");
    }
  }

  previousPage() {
    if (
      this.props.SelectedTransaction === "5f723fb0e0607f2f3408d05d" &&
      this.state.page == 4
    ) {
      console.log("If of redux main");
      this.setState({ page: this.state.page - 2 });
    } else {
      this.setState({ page: this.state.page - 1 });
    }
  }
  handleSubmit = async (values) => {
    console.log("product values", values);
    //map file data here
    const fd = new FormData();

    // fd.append("imageFile", values.imageToUpload.file); imageToUpload_want
    for (let x = 0; x < values.imageToUpload.length; x++) {
      console.log("img", values.imageToUpload[x].file);
      fd.append("images", values.imageToUpload[x].file);
      // console.log("imgForm...= ", imgForm);
    }
    console.warn(">> formData >> ", fd.getAll("images"));
    // console.log("console _want", values.imageToUpload_want[0]);
    console.log("want check", values.imageToUpload_want);
    if (values.imageToUpload_want !== undefined) {
      for (let y = 0; y < values.imageToUpload_want.length; y++) {
        console.log("img wa", values.imageToUpload_want[y].file);
        fd.append("images_want", values.imageToUpload_want[y].file);
        // console.log("imgForm...= ", imgForm);
      }
      console.warn(">>want formData >> ", fd.getAll("images_want"));
    }
    // for (var x = 0; x < values.imageToUpload_want.length; x++) {
    //   const imgForm = fd.append(
    //     "imageFile_want",
    //     values.imageToUpload_want.file[x]
    //   );
    //   console.log("imgForm..want.= ", imgForm);
    // }
    if (this.props.SelectedTransaction === "5f723e6f025dca04e0ae6f38") {
      console.warn("bart/rent");
      fd.append("swapType", values.swapType);
    }

    fd.append("transaction", values.transaction);

    fd.append("title", values.title);
    fd.append("category", values.category);
    fd.append("description", values.description);
    fd.append("title_want", values.title_want);
    fd.append("category_want", values.category_want);
    fd.append("description_want", values.description_want);
    fd.append("postalCode", values.postalCode);
    fd.append("city", values.city);
    fd.append("fullAddress", values.fullAddress);
    fd.append("swapValue", values.swapValue);
    fd.append("numberInStock", values.numberInStock);
    //passs fd  with values to action creator
    console.warn(">> Trans >> ", fd.get("transaction"));
    // console.warn(">> swapType >> ", fd.get("swapType"));
    console.warn(">> title >> ", fd.get("title"));
    console.warn(">> category >> ", fd.get("category"));
    console.warn(">> description >> ", fd.get("description"));
    // console.warn(">> title_want >> ", fd.get("title_want"));
    // console.warn(">> category_want >> ", fd.get("category_want"));
    console.warn(">> numberInStock >> ", fd.get("numberInStock"));
    // console.warn(">> description_want >> ", fd.get("description_want"));
    console.warn(">> postalCode >> ", fd.get("postalCode"));
    console.warn(">> city >> ", fd.get("city"));
    console.warn(">> fullAddress >> ", fd.get("fullAddress"));
    console.warn(">> swapValue >> ", fd.get("swapValue"));

    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "content-type": "multipart/form-data",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    };

    console.log("Get all", fd.getAll(""));
    await this.props.createProduct(fd, config);
    window.location = "/";
  };

  render() {
    console.log(
      "---> Main Form Transaction Types---->",
      this.props.SelectedTransaction
    );
    const { onSubmit } = this.props;
    const { page } = this.state;
    return (
      <div>
        {page === 1 && <WizardFormFirstPage onSubmit={this.nextPage} />}
        {page === 2 && (
          <WizardFormSecond
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {/* {page === 2 && (
          <WizardFormSecondPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )} */}
        {page === 3 && (
          <WizardFormBeforeThird
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 4 && (
          <WizardFormThirdPage
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 5 && (
          <WizardFormFourthPage
            previousPage={this.previousPage}
            onSubmit={this.handleSubmit}
          />
        )}
      </div>
    );
  }
}

WizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

//
// const mapDispatchToProps = dispatch => ({
//   createStream: productValue => dispatch(setCurrentUser(product))
// });

// const mapStateToProps = state=>({
//   currentUser: selectCurrentUser
// });
// export default connect(mapStateToProps, mapDispatchToProps)(App);

//
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
export default connect(mapStateToProps, { createProduct })(WizardForm);
