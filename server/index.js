import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from 'cookie-parser';
const app = express();
import UserRoutes from "./routes/userRoute.js";
import { ConnectionsForMongoDb } from "./config/mongoDb.js";

app.use(cors({
  origin:"http://localhost:5173",
  methods:["GET","POST","PUT","DELETE","PATCH"],
  allowedHeaders:[
    "Content-Type",
    "Authorization",
    "Cache-Control",
    "Expires",
    "Pragma"
  ],
  credentials:true
}));

ConnectionsForMongoDb(process.env.MONGODB_URL)
  .then(() => console.log("mongoDb Connected Successfully"))
  .catch((e) => console.log(e));

app.use(express.json());
app.use(cookieParser());
// routes
app.use("/user", UserRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log(
    `server is running on http://localhost:${process.env.PORT || 3000}`
  );
});
