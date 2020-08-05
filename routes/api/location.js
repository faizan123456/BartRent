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
router.get("/cities", async (req, res) => {
  const city = await City.find();
  res.send(city);
});

module.exports = router;
