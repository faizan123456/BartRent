const mongoose = require("mongoose");
const { Schema } = mongoose;

const city = new Schema({
  s_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "states"
  },
  name: String
});

const City = mongoose.model("City", city);

exports.City = City;
async function createCity(s_id, name) {
  const city = new City({
    s_id,
    name
  });
  const result = await city.save();
  console.log(result);
}
// createCity("5f16cac36c51b3437c40d783", "Hyderabad");
