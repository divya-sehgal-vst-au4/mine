const db = require('../config/db')
const Seq = require('sequelize')

let waiterTable = db.define('waiter', {
    waiterName : {
        type: Seq.STRING
    },
    waiterAge : {
        type: Seq.INTEGER
    },
    waiterMobile : {
        type: Seq.BIGINT
    },
    waiterRating : {
        type: Seq.INTEGER
    },
    waiterExp : {
        type: Seq.STRING
    }

})

module.exports = waiterTable