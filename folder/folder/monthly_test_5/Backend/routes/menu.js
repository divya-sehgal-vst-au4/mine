var express = require("express");
var Menu = require("../Model/Menu");
var router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const {
      body: { name, cuisine, foodtype, price }
    } = req;
    let menu = await Menu.create({ name, cuisine, foodtype, price });
    res.send(menu);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const { params } = req;
    let menu = await Menu.destroy({ where: { id: params.id } });
    res.send(menu);
  } catch (error) {
    console.log(error);
  }
});

router.patch("/update/:id", async (req, res) => {
  try {
    const {
      body: { name, cuisine, foodtype, price },
      params
    } = req;
    let menu = await Menu.update(
      { name, cuisine, foodtype, price },
      { where: { id: params.id } }
    );
    res.send(menu);
  } catch (error) {
    console.log(error);
  }
});

router.get("/all", async (req, res) => {
  try {
    let menu = await Menu.findAll();
    res.send(menu);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
