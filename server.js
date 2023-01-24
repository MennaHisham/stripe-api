require("./db");

const express = require("express");
const logger = require("morgan");
const app = express();
const PORT = process.env.PORT || 8000;

const allRoutes = require("./routes/allRoutes");

app.use(express.json());

app.use(logger("dev"));

app.use((error, req, res, next) => {
  const status = error.statusCode || 500;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});

app.use("/api", allRoutes);

app.listen(PORT, function () {
  console.log(`Listening on ${PORT}`);
});
