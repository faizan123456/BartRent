const mongoose = require("mongoose");
const { Schema } = mongoose;

const countrySchema = new Schema({
  name: String
});

const Country = mongoose.model("country", countrySchema);

async function createCountry(name) {
  const country = new Country({
    name
  });
  const result = await country.save();
  console.log(result);
}

// createCountry("UK");

exports.Country = Country;
exports.countrySchema = countrySchema;
