const mongoose = require("mongoose");
const { Schema } = mongoose;

const state = new Schema({
  c_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "countries"
  },
  name: String
});
const StateModel = mongoose.model("State", state);

exports.State = StateModel;
async function createState(c_id, name) {
  const state = new State({
    c_id,
    name
  });
  const result = await state.save();
  console.log(result);
}
// createState("5f16c743cfa6ac0c2842d426", "KPK");
