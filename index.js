const express = require("express");
const app = express();
// const pgrt = require("./route/pgroute");
// const mysqlrt = require("./route/mysqlroute");
const priorities = require('./route/priorities')
const mongoDbConnection = require('./db/mongoConn')

app.use(express.json());

mongoDbConnection.getConnection()

// app.use("/", pgrt);
// app.use("/", mysqlrt);
app.use('/api/priorities',priorities)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App listening on port Number ${PORT}`);
});
