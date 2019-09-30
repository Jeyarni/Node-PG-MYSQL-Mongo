// const Mysqlmodel = require("../model/mysqlmodel");
// require("express-async-errors");

// const getAll = async (req, res) => {
//   const data = await Mysqlmodel.findAll({
//     attributes: ["id", "name", "interviewer", "date"]
//   });
//   res.send(data);
// };
// const getOne = async (req, res) => {
//   const data = await Mysqlmodel.findOne({
//     attributes: ["id", "name", "interviewer", "date"],
//     where: { id: req.params.id }
//   });
//   res.status(200).send(data);
// };

// const saveOne = async (req, res) => {
//   const data = await Mysqlmodel.create(req.body);
//   res.status(200).send(data);
// };

// const updateOne = async (req, res) => {
//   const data = await Mysqlmodel.update(req.body, {
//     where: { id: req.params.id }
//   });
//   res.status(200).send(data);
// };

// const deleteOne = async (req, res) => {
//   const data = await Mysqlmodel.destroy({
//     where: { id: req.params.id }
//   });
//   res.status(200).send("Deleted");
// };
// module.exports = { getAll, getOne, saveOne, updateOne,deleteOne };
