import express from "express";
import { config } from "dotenv";

config();

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("running on port ", PORT);
});
