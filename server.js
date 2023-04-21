const express = require("express");
const cors = require("cors");
const connectDB = require("./database/db");
const cotizaciones = require("./routes/cotizaciones");

const app = express();
const port = 5100;

app.use(express.json());
app.use(cors());

app.use("/api/v1/cotizaciones", cotizaciones);

connectDB();
app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
