const express = require('express')
const router = express.Router()
const tableTable = require('../models/tableModel')

router.post('/', async (req, res) => {
    try {
        let table = await tableTable.create({
            seatingStrength: req.body.seatingStrength, 
            tableName: req.body.tableName,
            floorNumber: req.body.floorNumber
        })
        res.send(table)
    }
    catch(error){
        console.log(error)
    }
})

router.get('/', async (req, res) => {
    try {
        let allTables = await tableTable.findAll()
        res.send(allTables)
    }
    catch(err){
        console.log(err)
    }
})

router.put('/update/:id', async (req, res)=>{
    try {
        let newTables = await tableTable.update({
            seatingStrength: req.body.seatingStrength, 
            tableName: req.body.tableName,
            floorNumber: req.body.floorNumber
        },
        {where: {id: req.params.id}})
        res.send(newTables)
    }
    catch(error){
        console.log(error)
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        await tableTable.destroy({where: {id: req.params.id}})
        res.send('Deleted')
    }
    catch(error){
        console.log(error)
    }
})

module.exports = router