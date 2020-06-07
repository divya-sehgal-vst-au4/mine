const db = require('../database')
const sequelize = require('sequelize')

let Waiter = db.define('waiters', {
    waiter_name: {
        type: sequelize.STRING(50)
    },
    waiter_age: {
        type: sequelize.INTEGER,
    },
    waiter_mobile: {
        type: sequelize.STRING(10)
    },
    waiter_ratings: {
        type: sequelize.FLOAT
    },
    waiter_experience: {
        type: sequelize.INTEGER
    }

},
    {
        timestamps: false
    })

db.sync().then(res => {

})


module.exports = Waiter
