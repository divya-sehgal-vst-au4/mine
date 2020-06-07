const Sequelize = require("sequelize");

const db = new Sequelize("officedb", "postgres", "qwerty",{
    host: "localhost",
    dialect: "postgres",
    logging: false
})

db.authenticate()
.then(()=> {
    console.log("DB connection is established")
})

db.sync(
    {force : false}
)



module.exports = db