import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import taskApi from "./Api/taskApi.js";
import "dotenv/config";
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
mongoose
  .connect(process.env.MONGODB_URI)
  .then(console.log("MongoDB:ON"))
  .catch((e) => {
    console.log("MongoDB:OFF => " + e.message);
  });
app.use("/", taskApi);

app.listen("3000", () => {
  console.log(`server is running of Port: ${process.env.PORT}`);
});
