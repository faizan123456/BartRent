import React from "react";
import showResults from "./shownResult";
import WizardForm from "./reduxProductForm";
const Wizard = () => {
  return (
    <div>
      <WizardForm onSubmit={showResults} />
    </div>
  );
};

export default Wizard;
