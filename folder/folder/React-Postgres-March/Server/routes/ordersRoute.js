const express = require('express')
const router = express.Router()
const orderTable = require('../models/orderModel')
const waiter = require('../models/waiterModel')
const table = require('../models/tableModel')
const menu = require('../models/menuModel')

router.post('/', async (req, res) => {
    try {
        let order = await orderTable.create({
            customerName: req.body.customerName,
            customerMobile: req.body.customerMobile,
            itemsOrdered: req.body.itemsOrdered,
            totalPrice: req.body.totalPrice,
            paymentMode: req.body.paymentMode,
            waiterId: req.body.waiterId,
            tableId: req.body.tableId
        })
        res.send(order)
    }
    catch(error){
        console.log(error)
    }
})

router.get('/', async (req, res) => {
    try {
    let allOrders = await orderTable.findAll({include: [waiter, table, menu]})
        res.send(allOrders)
    }
    catch(err){
        console.log(err)
    }
})

router.put('/update/:id', async (req, res)=>{
    try {
        let newOrders = await orderTable.update({
            customerName: req.body.customerName, 
            customerMobile: req.body.customerMobile,
            itemsOrdered: req.body.itemsOrdered,
            totalPrice: req.body.totalPrice,
            paymentMode: req.body.paymentMode,
            waiterId: req.body.waiterId,
            tableId: req.body.tableId
        },
        {where: {id: req.params.id}})
        res.send(newOrders)

    }
    catch(error){
        console.log(error)
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        await orderTable.destroy({where: {id: req.params.id}})
        res.send('Deleted')
    }
    catch(error){
        console.log(error)
    }
})

module.exports = router