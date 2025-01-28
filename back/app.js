import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes.js";
import "dotenv/config";

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(bodyParser.json());
app.use("/", router);

app.listen(process.env.API_PORT, () => {
  console.log("App listening at port", process.env.API_PORT);
});
