import "dotenv/config";
import express from "express";
import cors from "cors";
const app = express();

import { ConnectionsForMongoDb } from "./config/mongoDb.js";
ConnectionsForMongoDb(process.env.MONGODB_URL)
  .then(() => console.log("mongoDb Connected Successfully"))
  .catch((e) => console.log(e));

app.use(express.json());
app.use(cors());

app.listen(process.env.PORT || 3000, () => {
  console.log(
    `server is running on http://localhost:${process.env.PORT || 3000}`
  );
});
