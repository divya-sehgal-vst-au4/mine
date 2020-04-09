const Seq = require('sequelize')

const db = new Seq('restaurant', 'postgres', 'Cck@1832',{
    host: 'localhost',
    dialect: 'postgres'
})

db.sync({})

module.exports = db;