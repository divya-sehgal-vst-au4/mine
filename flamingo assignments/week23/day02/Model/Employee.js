const db = require("../Database")
const Sequelize = require("sequelize")

const departmentTable = require("./Department")


let employeeTable = db.define("employee", {
  name:{
      type: Sequelize.STRING
  }
},{
    timestamps: false
})

departmentTable.hasMany(employeeTable,{foreignKey: "departmentName",sourceKey: "name"})
employeeTable.belongsTo(departmentTable,{foreignKey: "departmentName",targetKey: "name"})


module.exports = employeeTable