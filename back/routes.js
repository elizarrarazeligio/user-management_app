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
router.get("/users/:email", (req, res) => {
  const email = req.params.email;
  res.send(req.params);
  const sql = `SELECT * FROM Users WHERE email = ${JSON.stringify(email)}`;

  // db.query(sql, (err, response) => {
  //   if (err) throw err;
  //   if (response.length === 0) {
  //     res.status(404).send({
  //       status: "error",
  //       message: "User not registered, please register first.",
  //     });
  //   } else {
  //     res.send(response);
  //   }
  // });
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
