const db = require('../config/db')
const Seq = require('sequelize')

let menuTable = db.define('menu', {
    itemName : {
        type: Seq.STRING
    },
    cuisineName : {
        type: Seq.STRING
    },
    vegEggNonveg : {
        type: Seq.STRING
    },
    itemPrice : {
        type: Seq.INTEGER
    }
})

module.exports = menuTable