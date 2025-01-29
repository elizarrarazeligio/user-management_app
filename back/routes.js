import db from "./keys.js";
import { Router } from "express";

const router = Router();

// GET - get users
router.get("/users", (req, res) => {
  db.query("SELECT * FROM Users", (err, response) => {
    if (err) throw err;
    res.send(response);
  });
});

//GET - get and validate user by email and password
router.post("/users", (req, res) => {
  const { email, password } = req.body;
  const sql = `SELECT * FROM Users WHERE email = '${email}'`;

  if (!email || !password) {
    return res.status(400).send({
      status: "error",
      message: "Please provide email and password.",
    });
  }

  db.query(sql, (err, response) => {
    if (response.length === 0) {
      return res.status(404).send({
        status: "error",
        message: "User not registered, please register first.",
      });
    } else if (response[0].password !== password) {
      return res.status(400).send({
        status: "error",
        message: "Invalid password.",
      });
    } else if (err) {
      return res.status(400).send({
        status: "error",
        message: "Invalid email.",
      });
    } else {
      res.send({
        status: "success",
        message: "User logged in successfully!",
        response: response[0],
      });
    }
  });
});

// POST - register new user
router.post("/register", (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  const sql = `
              INSERT INTO Users (first_name, last_name, email, password)
              VALUES ('${first_name}', '${last_name}', '${email}', ${password});`;

  if (!first_name || !last_name || !email || !password) {
    return res.status(400).send({
      status: "error",
      message: "Please provide all required fields",
    });
  }

  db.query(sql, (err) => {
    if (err) {
      return res.status(400).send({
        status: "error",
        message: "Email already used, please use another one.",
      });
    }
    res.send({
      status: "success",
      message: "User registered successfully!",
      response: req.body,
    });
  });
});

export default router;
