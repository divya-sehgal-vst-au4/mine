const express = require('express')
const router = express.Router()
const waiterTable = require('../models/waiterModel')

router.post('/', async (req, res) => {
    try {
        let waiter = await waiterTable.create({
            waiterName: req.body.waiterName, 
            waiterAge: req.body.waiterAge,
            waiterMobile: req.body.waiterMobile,
            waiterRating: req.body.waiterRating,
            waiterExp: req.body.waiterExp
        })
        res.send(waiter)
    }
    catch(error){
        console.log(error)
    }
})

router.get('/', async (req, res) => {
    try {
        let allWaiters = await waiterTable.findAll()
        res.send(allWaiters)
    }
    catch(err){
        console.log(err)
    }
})

router.put('/update/:id', async (req, res)=>{
    try {
        let newWaiters = await waiterTable.update({
            waiterName: req.body.waiterName, 
            waiterAge: req.body.waiterAge,
            waiterMobile: req.body.waiterMobile,
            waiterRating: req.body.waiterRating,
            waiterExp: req.body.waiterExp
        },
        {where: {id: req.params.id}})
        res.send(newWaiters)
    }
    catch(error){
        console.log(error)
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        await waiterTable.destroy({where: {id: req.params.id}})
        res.send('Deleted')
    }
    catch(error){
        console.log(error)
    }
})

module.exports = router