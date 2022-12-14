"use strict";
const express = require("express");
const app = express();
const Mr = require("./model/model");
const cors = require("cors");
const port = process.env.PORT || 8000;
require("./model/connection");


// MiddleWares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
 res.send("Hello to the mern stack first ever project!");
});

app.post("/api/data", async (req, res) => {
 try {
  console.log(req.body);
  const data = await Mr(req.body);
  const ret = await data.save();
  res.status(201).send(ret);
 } catch (err) {
  res.status(500).send(err);
 }
});

app.get("/api/data", async (req, res) => {
 try {
  const data = await Mr.find().sort({_id: -1});
  res.status(200).send(data);
 } catch (err) {
  res.status(500).send(err);
 }
});

app.patch("/api/data", async (req, res) => {
 try {
  const id = req.query.id;
  const data = await Mr.findByIdAndUpdate(id, req.body);
  res.status(201).send(data);
 } catch (err) {
  res.status(500).send(err);
 }
});

app.delete("/api/data", async (req, res) => {
 try {
  const id = req.query.id;
  const data = await Mr.findByIdAndDelete(id);
  res.status(201).send(data);
 } catch (err) {
  res.status(500).send(err);
 }
});



app.listen(port, "localhost", () => {
 console.log("Server is running on port", port);
})


