const express = require('express')
const router = express.Router();
const Waiter = require('../Models/waiters')


//-------------------------------------Create waiter-------------------------------------------------------
router.post("/create", async (req, res) => {
    try {
        const { waiter_name, waiter_age, waiter_mobile, waiter_ratings, waiter_experience } = req.body;
        const waiterCreate = await Waiter.create({
            waiter_name: waiter_name,
            waiter_age: waiter_age,
            waiter_mobile: waiter_mobile,
            waiter_ratings: waiter_ratings,
            waiter_experience: waiter_experience
        })
        res.status(201).send({ statusCode: "201", message: waiterCreate })
    }
    catch (error) {
        res.status(400).send({ statusCode: "400", message: error })
    }
})

//------------------------------------get all waiters-------------------------------------------------------
router.get("/all", async (req, res) => {
    try {

        const allwaiters = await Waiter.findAll()
        res.status(200).send({ statusCode: "200", message: allwaiters })
    }
    catch (error) {
        res.status(400).send({ statusCode: "400", message: error })
    }
})

//-------------------------------------update waiter-------------------------------------------------------
router.put("/update/:id", async (req, res) => {
    try {
        const { body, params } = req;
        const updatedWaiter = await Waiter.update(
            {
                waiter_name: body.waiter_name,
                waiter_age: body.waiter_age,
                waiter_mobile: body.waiter_mobile,
                waiter_ratings: body.waiter_ratings,
                waiter_experience: body.waiter_experience
            }, { where: { id: params.id } })

        res.status(200).send({ statusCode: "200", message: updatedWaiter })
    }
    catch (error) {
        res.status(400).send({ statusCode: "400", message: error })
    }
})

//-------------------------------------delete waiter-------------------------------------------------------

router.delete("/delete/:id", async (req, res) => {
    try {
        const { params } = req;
        const deleteWaiter = await Waiter.destroy(
            { where: { id: params.id } })
        res.status(200).send({ statusCode: "200", message: deleteWaiter })
    }
    catch (error) {
        res.status(400).send({ statusCode: "400", message: error })
    }
})




module.exports = router