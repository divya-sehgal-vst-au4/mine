const express = require('express')
const router = express.Router();
const Menu = require('../Models/menu')


//-------------------------------------Create menu-------------------------------------------------------
router.post("/create", async (req, res) => {
    try {
        const { item_name, cuisine_name, food_type, item_price, item_qty } = req.body;
        const menuCreate = await Menu.create({
            item_name: item_name,
            cuisine_name: cuisine_name,
            food_type: food_type,
            item_price: item_price,
            item_qty: item_qty
        })
        res.status(201).send({ statusCode: "201", message: menuCreate })
    }
    catch (error) {
        res.status(400).send({ statusCode: "400", message: error })
    }
})

//------------------------------------get all menus-------------------------------------------------------
router.get("/all", async (req, res) => {
    try {

        const allmenus = await Menu.findAll()
        res.status(200).send({ statusCode: "200", message: allmenus })
    }
    catch (error) {
        res.status(400).send({ statusCode: "400", message: error })
    }
})

//-------------------------------------update menu-------------------------------------------------------
router.put("/update/:id", async (req, res) => {
    try {
        const { body, params } = req;
        const updatedMenu = await Menu.update(
            {
                item_name: body.item_name,
                cuisine_name: body.cuisine_name,
                food_type: body.food_type,
                item_price: body.item_price
            }, { where: { id: params.id } })

        res.status(200).send({ statusCode: "200", message: updatedMenu })
    }
    catch (error) {
        res.status(400).send({ statusCode: "400", message: error })
    }
})

//-------------------------------------delete menu-------------------------------------------------------

router.delete("/delete/:id", async (req, res) => {
    try {
        const { params } = req;
        const deleteMenu = await Menu.destroy(
            { where: { id: params.id } })
        res.status(200).send({ statusCode: "200", message: deleteMenu })
    }
    catch (error) {
        res.status(400).send({ statusCode: "400", message: error })
    }
})




module.exports = router