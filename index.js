const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const router = require("./routes.js");
const links = require("./links.json");

const app = express();

// Moteurs de templates
app.set("view engine", "ejs");

// Middlewares
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use(router);

// Mongoose connexions
mongoose.connect(
  "mongodb://localhost:27017/clientsRoomDB",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log("Error => ", err);
      // process.exit(0)
    } else {
      app.listen(3000, function () {
        console.log("Your app is running on port 3000");
      });
    }
  }
);
