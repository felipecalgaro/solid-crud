import express from "express";
import { config } from "dotenv";
import { MongoClient } from "./database/mongo";
import { router } from "./routes";

const main = async () => {
  config();

  await MongoClient.connect();

  const app = express();

  app.use(express.json());
  app.use(router);

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log("running on port", PORT);
  });
};

main();
