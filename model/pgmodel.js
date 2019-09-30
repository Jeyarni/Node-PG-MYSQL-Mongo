const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelize = require("../db/pgsqlConn");

class Pgmodel extends Model {}
Pgmodel.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    interviewer: {
      type: Sequelize.STRING,
      allowNull: false
    },
    date: {
      type: Sequelize.DATE,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: "Pgmodel"
  }
);
module.exports = Pgmodel;
