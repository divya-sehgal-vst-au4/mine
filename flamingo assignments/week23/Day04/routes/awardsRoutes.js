const express = require('express')
var router = express.Router();
const Award = require('../Models/award')


//-------------------------------------Create Table-------------------------------------------------------
router.post("/create", async (req, res) => {
    try {
        console.log(req.body)
        const { IIFA_Award, Mirchi_Award, Oscar_Award, Filmfare_Award, National_Award } = req.body;
        const AwardCreate = await Award.create({
            IIFA_Award: IIFA_Award,
            Mirchi_Award: Mirchi_Award,
            Oscar_Award: Oscar_Award,
            Filmfare_Award: Filmfare_Award,
            National_Award: National_Award
        })
        res.status(201).send({ statusCode: "201", message: AwardCreate })
    }
    catch (error) {
        res.status(400).send({ statusCode: "400", message: error })
    }
})

//------------------------------------get all Table-------------------------------------------------------
router.get("/all", async (req, res) => {
    try {

        const allAwards = await Award.findAll()
        res.status(200).send({ statusCode: "200", message: allAwards })
    }
    catch (error) {
        res.status(400).send({ statusCode: "400", message: error })
    }
})

//-------------------------------------update Table-------------------------------------------------------
router.put("/update/:id", async (req, res) => {
    try {
        const { body, params } = req;
        const updateAward = await Award.update(
            {
                Award_name: body.Award_name
            }, { where: { id: params.id } })
        res.status(200).send({ statusCode: "200", message: updateAward })
    }
    catch (error) {
        res.status(400).send({ statusCode: "400", message: error })
    }
})

//-------------------------------------delete Table-------------------------------------------------------

router.delete("/delete/:id", async (req, res) => {
    try {
        const { params } = req;
        const deleteAward = await Award.destroy(
            { where: { id: params.id } })
        res.status(200).send({ statusCode: "200", message: deleteAward })
    }
    catch (error) {
        res.status(400).send({ statusCode: "400", message: error })
    }
})




module.exports = router