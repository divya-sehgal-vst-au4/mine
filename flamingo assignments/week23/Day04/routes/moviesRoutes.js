const express = require('express')
var router = express.Router();
const Movie = require('../Models/movie')


//-------------------------------------Create Table-------------------------------------------------------
router.post("/create", async (req, res) => {
    try {
        const { movie_name } = req.body;
        const MovieCreate = await Movie.create({
            movie_name: movie_name
        })
        res.status(201).send({ statusCode: "201", message: MovieCreate })
    }
    catch (error) {
        res.status(400).send({ statusCode: "400", message: error })
    }
})

//------------------------------------get all Table-------------------------------------------------------
router.get("/all", async (req, res) => {
    try {

        const allMovies = await Movie.findAll()
        res.status(200).send({ statusCode: "200", message: allMovies })
    }
    catch (error) {
        res.status(400).send({ statusCode: "400", message: error })
    }
})

//-------------------------------------update Table-------------------------------------------------------
router.put("/update/:id", async (req, res) => {
    try {
        const { body, params } = req;
        const updateMovie = await Movie.update(
            {
                movie_name: body.movie_name
            }, { where: { id: params.id } })
        res.status(200).send({ statusCode: "200", message: updateMovie })
    }
    catch (error) {
        res.status(400).send({ statusCode: "400", message: error })
    }
})

//-------------------------------------delete Table-------------------------------------------------------

router.delete("/delete/:id", async (req, res) => {
    try {
        const { params } = req;
        const deleteMovie = await Movie.destroy(
            { where: { id: params.id } })
        res.status(200).send({ statusCode: "200", message: deleteMovie })
    }
    catch (error) {
        res.status(400).send({ statusCode: "400", message: error })
    }
})




module.exports = router