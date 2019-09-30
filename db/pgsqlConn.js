const Sequelize = require("sequelize");
require("express-async-errors");

const sequelize = new Sequelize("nodepgmymongo", "postgres", "root", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
  define: {
    timestamps: false,
    freezeTableName: true
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully...");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });
module.exports = sequelize;
