import Joi from "joi-browser";
const schema = {
  transaction: Joi.string().required().label("Transaction Type"),
  swapType: Joi.string().required().label("Swap Type"),
  title: Joi.string().min(3).max(55).required().label("Title"),
  numberInStock: Joi.number().required().min(1).max(100).label("Quantity"),
  category: Joi.string().required().label("Category"),
  description: Joi.string().min(10).max(1024).required().label("Description"),
  postalCode: Joi.required().label("Postal Code"),
  city: Joi.string().required().label("City"),
  fullAddress: Joi.string().min(5).max(255).required().label("Postal Address"),
  swapValue: Joi.number().min(5).required().label("Current Value"),
  rentalFrequency: Joi.string().required().label("Rental Plan"),
  imageToUpload: Joi.any(),

  // i want
  imageToUpload_want: Joi.any(),
  title_want: Joi.string().min(3).max(55).required().label("Title"),
  numberInStock_want: Joi.number().required().min(1).max(100).label("Quantity"),
  category_want: Joi.string().required().label("Category"),
  description_want: Joi.string()
    .min(10)
    .max(1024)
    .required()
    .label("Description"),
};
const validate = (values) => {
  const options = { abortEarly: false };
  console.log("Validate... ", values);
  const { error } = Joi.validate(values, schema, options);
  if (!error) return null;

  const errors = {};
  for (let item of error.details) errors[item.path[0]] = item.message;
  return errors;
};

const validateProperty = ({ name, value }) => {
  console.log("name with value", name, value);
  const obj = { [name]: value };
  const schema = { [name]: this.schema[name] };
  const { error } = Joi.validate(obj, schema);
  return error ? error.details[0].message : null;
};

// const validate = values => {
//   const errors = {};
//   if (!values.firstName) {
//     errors.firstName = "Required";
//   }
//   if (!values.lastName) {
//     errors.lastName = "Required";
//   }
//   if (!values.title) {
//     errors.title = "Required";
//   }
//   if (!values.email) {
//     errors.email = "Required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid email address";
//   }
//   if (!values.sex) {
//     errors.sex = "Required";
//   }
//   if (!values.favoriteColor) {
//     errors.favoriteColor = "Required";
//   }
//   return errors;
// };

export default validate;
