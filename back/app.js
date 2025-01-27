import express from "express";
import cors from "cors";
import router from "./routes.js";

const app = express();
const { PORT = 3005 } = process.env;

app.use(cors({ origin: "http://localhost:3000" }));
app.use("/", router);

app.listen(PORT, () => {
  console.log("App listening at port", PORT);
});
