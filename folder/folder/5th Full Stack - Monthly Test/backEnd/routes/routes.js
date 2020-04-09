const express = require("express")
const router = express.Router()

router.use("/menu",require("./menuRoute"))
router.use("/order",require("./orderRoute"))
router.use("/table",require("./tableRoute"))
router.use("/waiter",require("./waiterRoute"))

module.exports = router;