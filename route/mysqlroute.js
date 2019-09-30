const express = require("express");
const router = express.Router();
const connection = require("../db/mysqlConn");


router.get("/", (req, res) => {
  return res.send(" Hello Student...");
});

router.get("/all", (req, res) => {
  connection.query("SELECT * FROM mysqlmodel", (error, result) => {
    if (error) throw error;

    return res.send(result);
  });
});

router.get("/mysql/:id", (req, res) => {
  connection.query(
    `SELECT * FROM mysqlmodel where id = ${req.params.id}`,
    (error, result) => {
      if (error) throw error;

      return res.send(result[0]);
    }
  );
});

router.post("/", (req, res) => {

    const mysqlmodel = {
      id: req.body.id,
      name: req.body.name,
      interviewer: req.body.interviewer,
      date: req.body.date
    };

    connection.query("INSERT INTO mysqlmodel set ?", mysqlmodel, (error, result) => {
      if (error) throw error;
      return res.send(result);
    });
});

router.put("/:id", (req, res) => {

    let mysqlmodel = [
      req.body.name,
      req.body.interviewer,
      req.body.date,
    ];
    connection.query(
      `SELECT * FROM mysqlmodel where id = ${req.params.id}`,
      (error, result) => {
        if (error) throw error;
        if (result[0]) {
          connection.query(
            `UPDATE mysqlmodel SET name = ?, interviewer = ?, date = ? WHERE id = ${
              req.params.id
            }`,
            mysqlmodel,
            (error, result) => {
              if (error) {
                throw error;
              }
              return res.send("Data updated successfully...");
            }
          );
        } else {
          return res.status(404).send("Data not found...");
        }
      }
    );
});

router.delete("/:id", (req, res) => {
  connection.query(
    `DELETE FROM mysqlmodel WHERE id = ${req.params.id}`,
    (error, result) => {
      if (error) {
        return res.status(404).send("The given id was not found");
      }
      return res.status(200).send("Data deleted successfully...");
    }
  );
});

module.exports = router;