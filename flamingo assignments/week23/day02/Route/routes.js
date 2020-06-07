const express = require("express")
const router = express.Router()

router.use("/employee",require("./employeeRoutes"))
router.use("/department",require("./departmentRoutes"))

module.exports = router;