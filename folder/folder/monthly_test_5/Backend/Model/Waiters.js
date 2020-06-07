const db = require("../database");
const Sequelize = require("sequelize");

let Waiter = db.define(
  "waiter",
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    age: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    mobile: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    rating: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    experience: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  },
  {
    timestamps: false
  }
);

db.sync().then(res => {});

module.exports = Waiter;
