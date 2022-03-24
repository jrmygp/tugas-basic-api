const express = require("express");
const router = express.Router();
const { authControllers } = require("../controllers");

router.post("/", authControllers.registerUser)
router.get("/", authControllers.loginUser)

module.exports = router;