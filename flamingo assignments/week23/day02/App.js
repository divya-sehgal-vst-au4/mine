const express = require('express')
const app = express()

app.use(express.json())
app.use("/", require("./Route/routes"))

app.listen(3500,()=> console.log("Server started at 3500"))