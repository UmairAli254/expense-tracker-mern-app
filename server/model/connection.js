"use strict";
const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set('strictQuery', false); // To avoid the deprecation message that is coming because of the upcoming changes in mongoose


mongoose.connect(process.env.DB_URL, {
 family: 4
})
 .then(() => console.log("Connection successfull!"))
 .catch(err => console.log(err)); 