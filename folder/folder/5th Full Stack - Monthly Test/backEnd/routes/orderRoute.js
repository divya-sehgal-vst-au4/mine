var express = require('express');
var router = express.Router();

const ordersTable = require('../model/orderSchema')
const tablesTable = require('../model/tableSchema')
const menusTable = require('../model/menuSchema')
const waitersTable = require('../model/waiterSchema')



//Create a Order
router.post("/", async(req,res)=>{
    try {
        const { body } = req
        let order = await ordersTable.create({userName:body.userName, userMobile:body.userMobile,
         paymentMode:body.paymentMode, waiterID: body.waiterID, tableID: body.tableID, menuID : body.menuID, totalPrice : body.totalPrice})
        res.send(order)
    } catch (error) {
        console.log(error)
    }
})


//Find All Order
 router.get("/",async(req,res)=>{
    try {
        let table = await ordersTable.findAll({include : [waitersTable,tablesTable,menusTable]});
        res.send(table)
    } catch (error) {
        console.log(error)
    }
})


//Edit a Order
router.put("/edit/:id", async(req,res)=>{
    try {
        const { body,params } = req
        let order = await ordersTable.update({userName:body.userName, userMobile:body.userMobile,
        paymentMode:body.paymentMode, waiterID: body.waiterID, tableID: body.tableID, menuID: body.menuID},{
            where : { id : params.id }});
            res.send(order)
        } catch (error) {
            console.log(error)
        }
    } )
    
    //Delete an Order
    router.delete("/delete/:id", async(req,res)=>{
        try {
            const { params } = req
            await ordersTable.destroy({where : {id : params.id}})
            res.send("order deleted")
        } catch (error) {
            console.log(error)
        }
    } )
    
       


 module.exports = router;
