const db = require("../database");
const Sequelize = require("sequelize");

let Menu = db.define(
  "menu",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    cuisine: {
      type: Sequelize.STRING,
      allowNull: false
    },
    foodtype: {
      type: Sequelize.STRING,
      allowNull: false
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  },
  {
    timestamps: false
  }
);

db.sync().then(res => {});

module.exports = Menu;
