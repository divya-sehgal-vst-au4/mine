const express = require('express')
const router = express.Router()
const menuTable = require('../models/menuModel')

router.post('/', async (req, res) => {
    try {
        let menu = await menuTable.create({
            itemName: req.body.itemName, 
            cuisineName: req.body.cuisineName,
            vegEggNonveg: req.body.vegEggNonveg,
            itemPrice: req.body.itemPrice
        })
        res.send(menu)
    }
    catch(error){
        console.log(error)
    }
})

router.get('/', async (req, res) => {
    try {
        let allMenu = await menuTable.findAll()
        res.send(allMenu)
    }
    catch(err){
        console.log(err)
    }
})

router.put('/update/:id', async (req, res)=>{
    try {
        let newMenu = await menuTable.update({
            itemName: req.body.itemName, 
            cuisineName: req.body.cuisineName,
            vegEggNonveg: req.body.vegEggNonveg,
            itemPrice: req.body.itemPrice
        },
        {where: {id: req.params.id}})
        res.send(newMenu)
    }
    catch(error){
        console.log(error)
    }
})

router.delete('/delete/:id', async (req, res) => {
    try {
        await menuTable.destroy({where: {id: req.params.id}})
        res.send('Deleted')
    }
    catch(error){
        console.log(error)
    }
})

module.exports = router