const mongoose = require("mongoose");
const { Schema } = mongoose;

const rentalFrequencySchema = new Schema({
  name: {
    type: String,
  },
});

const RentalFrequency = mongoose.model(
  "RentalFrequency",
  rentalFrequencySchema
);
exports.rentalFrequencySchema = rentalFrequencySchema;
exports.RentalFrequency = RentalFrequency;

async function CreateRentalFrequency(name) {
  const rentalFrequency = new RentalFrequency({
    name,
  });
  const result = await rentalFrequency.save();
  console.log(result);
}
// CreateRentalFrequency("Hourly");
// CreateRentalFrequency("Daily");
// CreateRentalFrequency("Weekly");
// CreateRentalFrequency("Monthly");
