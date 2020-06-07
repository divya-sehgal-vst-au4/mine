const express = require("express")
const router = express.Router()

const departmentTable = require("../Model/Department")


router.get("/",(req,res)=>{
    res.send("Department said Hello")
})

//Insert a Department
router.post("/", async(req,res)=>{
    try {
        const { body } = req
        let department = await departmentTable.create({name:body.name})
        res.send(department)
    } catch (error) {
        console.log(error)
    }
})


//Edit a Department 
router.put("/edit/:id", async(req,res)=>{
    try {
        const { body,params } = req
        let department = await departmentTable.update({name:body.name},{
            where : { id : params.id }});
            res.send(department)
        } catch (error) {
            console.log(error)
        }
    } )
    

    //Delete a Department
    router.delete("/delete/:id", async(req,res)=>{
        try {
            const { params } = req
            await departmentTable.destroy({where : {id : params.id}})
            res.send("department deleted")
        } catch (error) {
            console.log(error)
        }
    } )
    
    
    //Find All Department
    router.get("/all",async(req,res)=>{
        try {
            let department = await departmentTable.findAll();
            res.send(department)
        } catch (error) {
            console.log(error)
        }
    })



module.exports = router;