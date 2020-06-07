var Sequelize = require("sequelize");
var db = require("../database");

var Table = require("./Tables");
var Waiter = require("./Waiters");
var Menu = require("./Menu");

var Order = db.define(
  "order",
  {
    user_name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    user_mobile: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    menuId: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    total_price: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    payment_mode: {
      type: Sequelize.STRING,
      allowNull: true
    }
    // waiterId: {
    //   type: Sequelize.INTEGER,
    //   allowNull: true
    // },
    // tableId: {
    //   type: Sequelize.INTEGER,
    //   allowNull: true
    // }
  },
  { timestamps: false }
);

Table.hasMany(Order);
Order.belongsTo(Table);

Waiter.hasMany(Order);
Order.belongsTo(Waiter);

Menu.hasMany(Order);
Order.belongsTo(Menu);

module.exports = Order;
