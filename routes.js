const express = require("express");
const router = express.Router();

const controller = require("./app/controller");

// Dynamic link
router.get("/room/:name", controller.link);

router.post("/room/contact", controller.mypost);

module.exports = router;
