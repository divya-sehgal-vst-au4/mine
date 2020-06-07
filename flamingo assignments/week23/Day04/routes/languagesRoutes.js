const express = require('express')
var router = express.Router();
const Language = require('../Models/language')


//-------------------------------------Create Table-------------------------------------------------------
router.post("/create", async (req, res) => {
    try {
        const { english, gujarati, marathi, punjabi, hindi } = req.body;
        const LanguageCreate = await Language.create({
            english: english,
            gujarati: gujarati,
            marathi: marathi,
            punjabi: punjabi,
            hindi: hindi

        })
        res.status(201).send({ statusCode: "201", message: LanguageCreate })
    }
    catch (error) {
        res.status(400).send({ statusCode: "400", message: error })
    }
})

//------------------------------------get all Table-------------------------------------------------------
router.get("/all", async (req, res) => {
    try {

        const allLanguages = await Language.findAll()
        res.status(200).send({ statusCode: "200", message: allLanguages })
    }
    catch (error) {
        res.status(400).send({ statusCode: "400", message: error })
    }
})

//-------------------------------------update Table-------------------------------------------------------
router.put("/update/:id", async (req, res) => {
    try {
        const { body, params } = req;
        const updateLanguage = await Language.update(
            {
                english: body.english,
                gujarati: body.gujarati,
                marathi: body.marathi,
                punjabi: body.punjabi,
                hindi: body.hindi
            }, { where: { id: params.id } })
        res.status(200).send({ statusCode: "200", message: updateLanguage })
    }
    catch (error) {
        res.status(400).send({ statusCode: "400", message: error })
    }
})

//-------------------------------------delete Table-------------------------------------------------------

router.delete("/delete/:id", async (req, res) => {
    try {
        const { params } = req;
        const deleteLanguage = await Language.destroy(
            { where: { id: params.id } })
        res.status(200).send({ statusCode: "200", message: deleteLanguage })
    }
    catch (error) {
        res.status(400).send({ statusCode: "400", message: error })
    }
})




module.exports = router