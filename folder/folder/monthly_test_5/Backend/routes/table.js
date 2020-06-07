var express = require("express");
var Table = require("../Model/Tables");
var router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const {
      body: { name, floor, strength }
    } = req;
    let table = await Table.create({ name, floor, strength });
    res.send(table);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const { params } = req;
    let table = await Table.destroy({ where: { id: params.id } });
    res.send(table);
  } catch (error) {
    console.log(error);
  }
});

router.patch("/update/:id", async (req, res) => {
  try {
    const {
      body: { name, floor, strength },
      params
    } = req;
    let table = await Table.update(
      { name, floor, strength },
      { where: { id: params.id } }
    );
    res.send(table);
  } catch (error) {
    console.log(error);
  }
});

router.get("/all", async (req, res) => {
  try {
    let table = await Table.findAll();
    res.send(table);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
