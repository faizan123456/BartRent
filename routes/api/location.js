const router = require("express").Router();
const { Country } = require("./../../models/country");
const { City } = require("../../models/city");
const { State } = require("../../models/state");
// const mongoose = require("mongoose");
// const User = mongoose.model("Users");
router.get("/", async (req, res) => {
  const country = await Country.find();
  console.log("I am", country);
  res.send(country);
});
router.get("/states", async (req, res) => {
  const state = await State.find();
  res.send(state);
});
router.get("/states/:id", async (req, res) => {
  console.log("id  of cId", req.params.id);
  const state = await State.find({ c_id: req.params.id });
  res.send(state);
});
router.get("/cities/:id", async (req, res) => {
  const city = await City.find({ s_id: req.params.id });
  res.send(city);
});

module.exports = router;
