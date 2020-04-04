const express = require('express')
var router = express.Router();
const Singer = require('../Models/singer')


//-------------------------------------Create Table-------------------------------------------------------
router.post("/create", async (req, res) => {
    try {
        const { singer_name, experience, classically_trained, singer_gender, award_id, language_id } = req.body;
        const SingerCreate = await Singer.create({
            singer_name: singer_name,
            experience: experience,
            classically_trained: classically_trained,
            singer_gender: singer_gender,
            award_id: award_id,
            language_id: language_id
        })
        res.status(201).send({ statusCode: "201", message: SingerCreate })
    }
    catch (error) {
        res.status(400).send({ statusCode: "400", message: error })
    }
})

//------------------------------------get all Table-------------------------------------------------------
router.get("/all", async (req, res) => {
    try {

        const allSingers = await Singer.findAll()
        res.status(200).send({ statusCode: "200", message: allSingers })
    }
    catch (error) {
        res.status(400).send({ statusCode: "400", message: error })
    }
})

//-------------------------------------update Table-------------------------------------------------------
router.put("/update/:id", async (req, res) => {
    try {
        const { body, params } = req;
        const updateSinger = await Singer.update(
            {
                Singer_name: body.Singer_name,
                experience: body.experience,
                classically_trained: body.classically_trained,
                singer_gender: body.singer_gender,
                award_id: bosy.award_id,
                language_id: body.language_id

            }, { where: { id: params.id } })
        res.status(200).send({ statusCode: "200", message: updateSinger })
    }
    catch (error) {
        res.status(400).send({ statusCode: "400", message: error })
    }
})

//-------------------------------------delete Table-------------------------------------------------------

router.delete("/delete/:id", async (req, res) => {
    try {
        const { params } = req;
        const deleteSinger = await Singer.destroy(
            { where: { id: params.id } })
        res.status(200).send({ statusCode: "200", message: deleteSinger })
    }
    catch (error) {
        res.status(400).send({ statusCode: "400", message: error })
    }
})




module.exports = router