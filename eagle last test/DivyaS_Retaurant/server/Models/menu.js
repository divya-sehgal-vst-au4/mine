const db = require('../database')
const sequelize = require('sequelize')

let Menu = db.define('menu', {
    item_name: {
        type: sequelize.STRING(50)
    },
    cuisine_name: {
        type: sequelize.STRING(50)
    },
    food_type: {
        type: sequelize.STRING(10)
    },
    item_price: {
        type: sequelize.INTEGER
    },
    item_qty: {
        type: sequelize.INTEGER
    }

},
    {
        timestamps: false
    }
)

db.sync().then(res => {

})


module.exports = Menu
