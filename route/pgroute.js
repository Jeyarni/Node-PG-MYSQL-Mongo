const express = require("express");
const router = express.Router();
const func = require("../function/pgfunction");
require("express-async-errors");

router.get("/", async (req, res) => {
  await func.getAll(req, res);
});

router.get("/:id", async (req, res) => {
  await func.getOne(req, res);
});

router.post("/", async (req, res) => {
  await func.saveOne(req, res);
});

router.put("/:id", async (req, res) => {
  await func.updateOne(req, res);
});

router.delete("/:id", async (req, res) => {
  await func.deleteOne(req, res);
});

module.exports = router;
