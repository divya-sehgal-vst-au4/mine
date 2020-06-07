const express = require("express")
const router = express.Router()

const employeeTable = require("../Model/Employee")
const departmentTable = require("../Model/Department")

router.get("/",(req,res)=>{
    res.send("Employee said Hello")
})

//Insert an Employee
router.post("/", async(req,res)=>{
    try {
        const { body } = req
        let employee = await employeeTable.create({name:body.name, departmentName:body.department})
        res.send(employee)
    } catch (error) {
        console.log(error)
    }
})


//Edit an Employee 
router.put("/edit/:id", async(req,res)=>{
    try {
        const { body,params } = req
        let employee = await employeeTable.update({name:body.name,departmentName:body.department},{
            where : { id : params.id }});
            res.send(employee)
        } catch (error) {
            console.log(error)
        }
    } )
    
    //Delete an Employee
    router.delete("/delete/:id", async(req,res)=>{
        try {
            const { params } = req
            await employeeTable.destroy({where : {id : params.id}})
            res.send("employee deleted")
        } catch (error) {
            console.log(error)
        }
    } )
    
    
    //Find All Employees
    router.get("/all",async(req,res)=>{
        try {
            let employee = await employeeTable.findAll();
            res.send(employee)
        } catch (error) {
            console.log(error)
        }
    })

//Find an Employee with a name
    router.get("/find/:name", async(req,res)=>{
    try {
        const { params } = req
        let employee = await employeeTable.findOne({where : {name : params.name}})
        res.send(employee)
    } catch (error) {
        console.log(error)
    }
} )


    //Find All Employees with Department
    router.get("/department/:department",async(req,res)=>{
        try {
            const { params } = req
            let employee = await employeeTable.findAll({where : {departmentName : params.department}});
            res.send(employee)
        } catch (error) {
            console.log(error)
        }
    })




module.exports = router;