const express = require("express");
const cors = require("cors");
const connectDB = require("./database/db");
const cotizaciones = require("./routes/cotizaciones");

const app = express();
const port = 5100;

app.use(express.json());
app.use(cors());

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});



app.use("/api/v1/cotizaciones", cotizaciones);

connectDB();
app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
