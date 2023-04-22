import express, { json } from "express";
import cors from "cors";
import connectDB from "./database/db";
import cotizaciones from "./routes/cotizaciones";

const app = express();
const port = 5100;

app.use(json());
app.use(cors());


app.use("/api/v1/cotizaciones", cotizaciones);

connectDB();
app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
