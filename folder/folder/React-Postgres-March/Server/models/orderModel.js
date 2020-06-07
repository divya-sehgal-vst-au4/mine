const db = require('../config/db')
const Seq = require('sequelize')
const waiter = require('./waiterModel')
const table = require('./tableModel')
const menu = require('./menuModel')

let orderTable = db.define('orders', {
    customerName : {
        type: Seq.STRING
    },
    customerMobile : {
        type: Seq.STRING
    },
    itemsOrdered : {
        type: Seq.ARRAY(Seq.JSONB)
    },
    totalPrice : {
        type: Seq.STRING
    },
    paymentMode : {
        type: Seq.STRING
    }
})

waiter.hasMany(orderTable, {foreignKey: 'waiterId', sourceKey: 'id'})
orderTable.belongsTo(waiter, {foreignKey: 'waiterId', targetKey: 'id'})

table.hasMany(orderTable, {foreignKey: 'tableId', sourceKey: 'id'})
orderTable.belongsTo(table,{foreignKey:'tableId', targetKey:'id'})

// menu.hasMany(orderTable,{foreignKey:'itemId', sourceKey:'id'})
// orderTable.belongsTo(menu, {foreignKey:'itemId', targetKey:'id'})

db.sync({force: true})

module.exports = orderTable