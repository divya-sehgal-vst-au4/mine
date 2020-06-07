var express = require("express");
var Waiter = require("../Model/Waiters");

var router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const {
      body: { name, age, mobile, rating, experience }
    } = req;
    let waiter = await Waiter.create({ name, age, mobile, rating, experience });
    res.send(waiter);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const { params } = req;
    let waiter = await Waiter.destroy({ where: { id: params.id } });
    res.send(waiter);
  } catch (error) {
    console.log(error);
  }
});

router.patch("/update/:id", async (req, res) => {
  try {
    const {
      body: { name, age, mobile, rating, experience },
      params
    } = req;
    let waiter = await Waiter.update(
      { name, age, mobile, rating, experience },
      { where: { id: params.id } }
    );
    res.send(waiter);
  } catch (error) {
    console.log(error);
  }
});

router.get("/all", async (req, res) => {
  try {
    let waiter = await Waiter.findAll();
    res.send(waiter);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
