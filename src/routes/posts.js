const express = require("express");
const router = express.Router();
const { postControllers } = require("../controllers");

router.get("/", postControllers.getAllPosts)


module.exports = router;