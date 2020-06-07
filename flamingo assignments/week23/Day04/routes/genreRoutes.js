const express = require('express')
var router = express.Router();
const Genre = require('../Models/genre')


//-------------------------------------Create Table-------------------------------------------------------
router.post("/create", async (req, res) => {
    try {
        const { classical, rock, dubstep, country } = req.body;
        const GenreCreate = await Genre.create({
            classical: classical,
            rock: rock,
            dubstep: dubstep,
            country: country
        })
        res.status(201).send({ statusCode: "201", message: GenreCreate })
    }
    catch (error) {
        res.status(400).send({ statusCode: "400", message: error })
    }
})

//------------------------------------get all Table-------------------------------------------------------
router.get("/all", async (req, res) => {
    try {

        const allGenres = await Genre.findAll()
        res.status(200).send({ statusCode: "200", message: allGenres })
    }
    catch (error) {
        res.status(400).send({ statusCode: "400", message: error })
    }
})

//-------------------------------------update Table-------------------------------------------------------
router.put("/update/:id", async (req, res) => {
    try {
        const { body, params } = req;
        const updateGenre = await Genre.update(
            {
                classical: body.classical,
                rock: body.rock,
                dubstep: body.dubstep,
                country: body.country
            }, { where: { id: params.id } })
        res.status(200).send({ statusCode: "200", message: updateGenre })
    }
    catch (error) {
        res.status(400).send({ statusCode: "400", message: error })
    }
})

//-------------------------------------delete Table-------------------------------------------------------

router.delete("/delete/:id", async (req, res) => {
    try {
        const { params } = req;
        const deleteGenre = await Genre.destroy(
            { where: { id: params.id } })
        res.status(200).send({ statusCode: "200", message: deleteGenre })
    }
    catch (error) {
        res.status(400).send({ statusCode: "400", message: error })
    }
})




module.exports = router