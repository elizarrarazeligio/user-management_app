import db from "./keys.js";
import { response, Router } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = Router();
const JWT_SECRET = "c51a779b8627df8f36e5447ea7c689b468f76eed9a599411";

// GET - get users
router.get("/users", (req, res) => {
  db.query("SELECT * FROM Users", (err, response) => {
    if (err) throw err;
    res.send(response);
  });
});

// GET - get user by token
router.get("/users/user", (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).send({
      status: "error",
      message: "Forbidden access, token not provided.",
    });
  }

  const trimmedToken = token.trim();
  const decodedToken = jwt.verify(trimmedToken, JWT_SECRET);
  const sql = `SELECT user_id, email, status FROM Users WHERE email = '${decodedToken.email}'`;

  db.query(sql, (err, response) => {
    if (response[0].length === 0) {
      return res.status(404).send({
        status: "error",
        message: "User not registered, please register first.",
      });
    } else if (err) {
      return res.status(400).send({
        status: "error",
        message: "Invalid token.",
      });
    } else {
      res.send({
        status: "success",
        response: response[0],
      });
    }
  });
});

// POST- get and validate user by email and password
router.post("/users", (req, res) => {
  const { email, password } = req.body;
  const sql = `SELECT * FROM Users WHERE email = '${email}'`;

  if (!email || !password) {
    return res.status(400).send({
      status: "error",
      message: "Please provide email and password.",
    });
  }

  db.query(sql, async (err, response) => {
    if (response.length === 0) {
      return res.status(404).send({
        status: "error",
        message: "User not registered, please register first.",
      });
    }

    const passwordMatch = await bcrypt.compare(password, response[0].password);
    const token = jwt.sign(
      {
        id: response[0].user_id,
        email: response[0].email,
      },
      JWT_SECRET,
      { expiresIn: "10m" }
    );
    if (!passwordMatch) {
      return res.status(400).send({
        status: "error",
        message: "Invalid password.",
      });
    } else if (err) {
      return res.status(400).send({
        status: "error",
        message: "Invalid email.",
      });
    } else if (response[0].status == 0) {
      return res.status(400).send({
        status: "error",
        message: "Blocked account.",
      });
    } else {
      res.send({
        status: "success",
        message: "User logged in successfully!",
        response: response[0],
        token: token,
      });
    }
  });
});

// POST - register new user
router.post("/register", async (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  const hashedPasword = await bcrypt.hash(password, 10);
  const sql = `
              INSERT INTO Users (first_name, last_name, email, password)
              VALUES ('${first_name}', '${last_name}', '${email}', '${hashedPasword}');`;

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

// PATCH - check/uncheck user
router.patch("/users/check", (req, res) => {
  const { id } = req.body;
  const sql = `UPDATE Users SET checked = NOT checked WHERE user_id = '${id}'`;

  db.query(sql, (err, response) => {
    if (err) throw err;
    res.send(response);
  });
});

// PATCH - check/uncheck all users
router.patch("/users/check/all", (req, res) => {
  const { status } = req.body;
  const sql = `UPDATE Users SET checked = NOT checked WHERE checked = ${status}`;

  db.query(sql, (err, response) => {
    if (err) throw err;
    res.send(response);
  });
});

// PATCH - block/unblock users
router.patch("/users", (req, res) => {
  const { status } = req.body;
  const sql = `UPDATE Users SET status = ${status} WHERE checked = true`;

  db.query(sql, (err, response) => {
    if (response.affectedRows == 0) {
      res
        .status(400)
        .send({ status: "error", message: "Select at least one register." });
    } else if (err) {
      res
        .status(400)
        .send({ status: "error", message: "Unable to proceed action." });
    } else if (status) {
      res.send({
        status: "success",
        message: "User(s) successfully unblocked.",
      });
    } else {
      res.send({
        status: "success",
        message: "User(s) successfully blocked.",
      });
    }
  });
});

// DELETE - delete selected users
router.delete("/users", (req, res) => {
  const sql = `DELETE FROM Users WHERE checked = true`;

  db.query(sql, (err, response) => {
    if (response.affectedRows == 0) {
      res
        .status(400)
        .send({ status: "error", message: "Select at least one register." });
    } else if (err) {
      res
        .status(400)
        .send({ status: "error", message: "Unable to proceed action." });
    } else {
      res.send({
        status: "success",
        message: "User(s) successfully deleted.",
      });
    }
  });
});

export default router;
