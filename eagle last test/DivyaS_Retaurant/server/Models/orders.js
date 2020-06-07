const db = require('../database')
const sequelize = require('sequelize')
const Waiter = require('./waiters')
const Table = require('./tables')



let Order = db.define('orders', {
    user_name: {
        type: sequelize.STRING(50)
    },
    user_mobile: {
        type: sequelize.STRING(10)

    },
    items_ordered: {
        type: sequelize.STRING()
    },
    total_price: {
        type: sequelize.INTEGER
    },
    payment_mode: {
        type: sequelize.STRING()
    }

},
    {
        timestamps: false
    })

db.sync().then(res => {

})


Waiter.hasOne(Order, { foreignKey: 'waiter_id' })
Order.belongsTo(Waiter, { foreignKey: 'waiter_id' })

Table.hasOne(Order, { foreignKey: 'table_id' })
Order.belongsTo(Table, { foreignKey: 'table_id' })


module.exports = Order
