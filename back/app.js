import express from "express";
import cors from "cors";

const app = express();
const { PORT = 3005 } = process.env;

app.use(cors({ origin: "http://localhost:3000" }));

app.get("/", (req, res) => {
  res.send({ message: "Hola mundo!" });
});

app.listen(PORT, () => {
  console.log("App listening at port", PORT);
});
