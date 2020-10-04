import react from "react";
const CheckBox = ({}) => {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        value=""
        id="defaultCheck1"
      />
      <label className="form-check-label" for="defaultCheck1">
        Default checkbox
      </label>
    </div>
  );
};

export default CheckBox;
