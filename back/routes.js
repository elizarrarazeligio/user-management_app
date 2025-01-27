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
  const { first_name, last_name, email } = req.body;
  const sql = `INSERT INTO Users (first_name, last_name, email) VALUE ('${first_name}', '${last_name}, '${email}')`;

  db.query(sql, (err) => {
    if (err) throw err;
    res.send({ message: "success", response: "User registered succesfully." });
  });
});

export default router;
