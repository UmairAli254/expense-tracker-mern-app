"use strict";
const mongoose = require("mongoose");

const Sr = new mongoose.Schema({
 name: String,
 category: String,
 budget: Number,
 date: {
  type: Date,
  default: Date.now
 }
});

const Mr = new mongoose.model("expenses", Sr);

module.exports = Mr;