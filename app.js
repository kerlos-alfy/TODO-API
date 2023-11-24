//* ------------------- Requirements ------------------- *//
const express = require("express");
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const dbConnection = require("./Config/database");
const todoRoute = require("./Routes/todoRoute");

//* ------------------- Connection DB ------------------- *//

dbConnection();

//* ------------------- Configrations ------------------- *//
const app = express();
app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log(`mode: ${process.env.NODE_ENV}`);
}

//* ------------------- Routes ------------------- *//
app.use("/api/v1/todo", todoRoute);

//* ------------------- Run App ------------------- *//
const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
