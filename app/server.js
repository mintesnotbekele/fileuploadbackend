//require("express");


const express = require("express");
const apiRoutes = require("./routes/index.js");
const dotenv = require("dotenv");
const db = require("./models/index.js");
//import swaggerUi from "swagger-ui-express";
//import swaggerDocument from "./swagger.json";
const cors = require("cors");
const app = express()
const port = 3001
var bodyParser = require('body-parser')
dotenv.config();
app.use(cors());
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
//app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(express.json());
app.use(express.json({ limit: '200kb' }));
app.use(bodyParser.json({ limit: "200mb" }));
// db.sequelize.sync();
// force: true will drop the table if it already exists
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and Resync Database with { force: true }");
  });

app.use(`/api/${process.env.APP_VERSION}`, apiRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})