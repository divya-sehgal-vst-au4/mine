const db = require('../config/db')
const Seq = require('sequelize')

let tableTable = db.define('table', {
    seatingStrength : {
        type: Seq.INTEGER
    },
    tableName : {
        type: Seq.INTEGER
    },
    floorNumber : {
        type: Seq.INTEGER
    }
})

module.exports = tableTable