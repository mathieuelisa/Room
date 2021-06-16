const express = require("express");
const router = express.Router();
const app = express()

// const link = require("./links.json")

const controller = require("./controller")


// Dynamic link
router.get("/room/:name", controller.link)

router.post("/room/contact", controller.mypost)

module.exports = router;