var express = require("express");

var router = express.Router();

var Orders = require("../Model/Orders");

router.post("/add", async (req, res) => {
  try {
    const {
      body: {
        user_name,
        user_mobile,
        menuId,
        total_price,
        payment_mode,
        waiterId,
        tableId
      }
    } = req;
    let order = await Orders.create({
      user_name,
      user_mobile,
      menuId,
      total_price,
      payment_mode,
      waiterId,
      tableId
    });
    res.send(order);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

router.get("/all", async (req, res) => {
  try {
    let order = await Orders.findAll();
    res.send(order);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

router.patch("/update/:id", async (req, res) => {
  try {
    const {
      body: {
        user_name,
        user_mobile,
        menuId,
        total_price,
        payment_mode,
        waiterId,
        tableId
      },
      params
    } = req;
    let order = await Orders.update(
      {
        user_name,
        user_mobile,
        menuId,
        total_price,
        payment_mode,
        waiterId,
        tableId
      },
      { where: { id: params.id } }
    );
    res.send(order);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const { params } = req;
    let order = await Orders.destroy({ where: { id: params.id } });
    res.send(order);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

module.exports = router;
