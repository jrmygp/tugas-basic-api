const authController = require("./auth");
const employeeControllers = require("./employees");
const postControllers = require("./posts")


module.exports = {
  employeeControllers,
  authController,
  postControllers
}