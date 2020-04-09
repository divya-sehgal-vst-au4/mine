const db = require("../database");
const Sequelize = require("sequelize");

let Table = db.define(
  "table",
  {
    strength: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    floor: {
      type: Sequelize.INTEGER,
      allowNull: false
    }
  },
  {
    timestamps: false
  }
);

db.sync().then(res => {});

module.exports = Table;
