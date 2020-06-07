const Sequelize = require("sequelize");
// You are connected to database "restaurant" as user "postgres" on host "localhost" (address "::1") at port "5432".
const db = new Sequelize("restaurant", "postgres", "edu_tech", {
  host: "localhost",
  dialect: "postgres"
});

db.authenticate().then(() => {
  console.log("DB connection is established");
});

module.exports = db;
