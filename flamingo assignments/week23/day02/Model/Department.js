const db = require("../Database")
const Sequelize = require("sequelize")

let departmentTable = db.define("department", {
  name:{
      type: Sequelize.STRING,
      unique: true
  }
},{
    timestamps: false
})


module.exports = departmentTable