import db from "./keys.js";
import { Router } from "express";

const router = Router();

// get users
router.get("/users", (req, res) => {
  db.query("SELECT * FROM Users", (err, response) => {
    if (err) throw err;
    res.send(response);
  });
});

// register new user
router.post("/register", (req, res) => {
  const data = req.body;
  const sql = `INSERT INTO Users (first_name, last_name, email) VALUES ('${data.first_name}', '${data.last_name}', '${data.email}');`;

  console.log(sql);
  db.query(sql, (err, response) => {
    if (err) throw err;
    res.send({
      status: "success",
      message: "User registered successfully!",
      response: req.body,
    });
  });
});

export default router;
