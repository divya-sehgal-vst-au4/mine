const express = require('express')
var router = express.Router();
const Song = require('../Models/songs')


//-------------------------------------Create Table-------------------------------------------------------
router.post("/create", async (req, res) => {
    try {
        const { song_name, song_length, song_release_year, award_id, movie_id, genre_id, language_id, singer_id } = req.body;
        const songCreate = await Song.create({
            song_name: song_name,
            song_length: song_length,
            song_release_year: song_release_year,
            award_id: award_id,
            movie_id: movie_id,
            genre_id: genre_id,
            language_id: language_id,
            singer_id: singer_id

        })
        res.status(201).send({ statusCode: "201", message: songCreate })
    }
    catch (error) {
        res.status(400).send({ statusCode: "400", message: error })
    }
})

//------------------------------------get all Table-------------------------------------------------------
router.get("/all", async (req, res) => {
    try {

        const allSongs = await Song.findAll()
        res.status(200).send({ statusCode: "200", message: allSongs })
    }
    catch (error) {
        res.status(400).send({ statusCode: "400", message: error })
    }
})

//-------------------------------------update Table-------------------------------------------------------
router.put("/update/:id", async (req, res) => {
    try {
        const { body, params } = req;
        const updateSong = await Song.update(
            {
                song_name: body.song_name,
                song_length: body.song_length,
                song_release_year: body.song_release_year,
                award_id: body.award_id,
                movie_id: body.movie_id,
                genre_id: body.genre_id,
                language_id: body.language_id,
                singer_id: body.singer_id
            }, { where: { id: params.id } })
        res.status(200).send({ statusCode: "200", message: updateSong })
    }
    catch (error) {
        res.status(400).send({ statusCode: "400", message: error })
    }
})

//-------------------------------------delete Table-------------------------------------------------------

router.delete("/delete/:id", async (req, res) => {
    try {
        const { params } = req;
        const deleteSong = await Song.destroy(
            { where: { id: params.id } })
        res.status(200).send({ statusCode: "200", message: deleteSong })
    }
    catch (error) {
        res.status(400).send({ statusCode: "400", message: error })
    }
})




module.exports = router