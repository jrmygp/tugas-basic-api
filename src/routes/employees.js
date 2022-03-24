const express = require("express");
const router = express.Router();
const { employeeControllers } = require("../controllers");
const requiresAuth = require("../middlewares/requiresAuth");
const validateKey = require("../middlewares/validateKey")

router.get("/", validateKey,employeeControllers.getAllEmployees)
router.get("/:id", employeeControllers.getEmployeeById)
router.post("/", employeeControllers.createNewEmployee)
router.patch("/:id", employeeControllers.editEmployeeById)
router.delete("/:id", employeeControllers.deleteEmployeeById)

router.delete("/", employeeControllers.deleteEmployeeMoreThanOne)
router.patch("/", employeeControllers.editEmployeeMoreThanOne)

module.exports = router;