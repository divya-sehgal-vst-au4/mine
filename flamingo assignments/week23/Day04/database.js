const Sequelize = require("sequelize")

const db = new Sequelize('postgres://postgres:khushi27@localhost:5433/week23_day04_assignment')



db.authenticate()
    .then(() => {
        console.log("DB connection is established");
    })

module.exports = db;