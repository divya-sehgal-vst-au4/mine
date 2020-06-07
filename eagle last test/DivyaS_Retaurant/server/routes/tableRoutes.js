const express = require('express')
const router = express.Router();
const Table = require('../Models/tables')


//-------------------------------------Create Table-------------------------------------------------------
router.post("/create", async (req, res) => {
    try {
        const { seating_strength, table_name, floor_number } = req.body;
        const tableCreate = await Table.create({
            seating_strength: seating_strength,
            table_name: table_name,
            floor_number: floor_number
        })
        res.status(201).send({ statusCode: "201", message: tableCreate })
    }
    catch (error) {
        res.status(400).send({ statusCode: "400", message: error })
    }
})

//------------------------------------get all Table-------------------------------------------------------
router.get("/all", async (req, res) => {
    try {

        const allTable = await Table.findAll()
        res.status(200).send({ statusCode: "200", message: allTable })
    }
    catch (error) {
        res.status(400).send({ statusCode: "400", message: error })
    }
})

//-------------------------------------update Table-------------------------------------------------------
router.put("/update/:id", async (req, res) => {
    try {
        const { body, params } = req;
        const updatedTable = await Table.update(
            {
                seating_strength: body.seating_strength,
                table_name: body.table_name,
                floor_number: body.floor_number
            }, { where: { id: params.id } })
        res.status(200).send({ statusCode: "200", message: updatedTable })
    }
    catch (error) {
        res.status(400).send({ statusCode: "400", message: error })
    }
})

//-------------------------------------delete Table-------------------------------------------------------

router.delete("/delete/:id", async (req, res) => {
    try {
        const { params } = req;
        const deleteTable = await Table.destroy(
            { where: { id: params.id } })
        res.status(200).send({ statusCode: "200", message: deleteTable })
    }
    catch (error) {
        res.status(400).send({ statusCode: "400", message: error })
    }
})




module.exports = router