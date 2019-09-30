const express = require("express");
const app = express();
const pgrt = require("./route/pgroute");
const mysqlrt = require("./route/mysqlroute");

app.use(express.json());

// app.use("/", pgrt);
app.use("/", mysqlrt);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`App listening on port Number ${PORT}`);
});
