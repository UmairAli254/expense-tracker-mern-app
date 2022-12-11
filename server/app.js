"use strict";
import express from "express";
const app = express();
const port = process.env.PORT || 8000;

app.get("", (req, res) => {
 res.send("Hello to the mern stack first ever project!");
});


app.listen(port, "localhost", () => {
 console.log("Server is running on port", port);
})


