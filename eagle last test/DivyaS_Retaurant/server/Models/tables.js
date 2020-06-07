const db = require('../database')
const sequelize = require('sequelize')


let Table = db.define('tables', {
    seating_strength: {
        type: sequelize.INTEGER
    },
    table_name: {
        type: sequelize.STRING()
    },
    floor_number: {
        type: sequelize.INTEGER
    }
},
    {
        timestamps: false
    })



db.sync().then(res => {

})

module.exports = Table