const express = require("express");
const router = express.Router();
const User = require("../models/users");
const bcrypt = require("bcrypt");
const { generateToken, validateToken } = require("../config/token");

router.post("/register", (req, res) => {
  const user = req.body;
  User.create(user)
    .then((newUser) => res.status(201).send(newUser))
    .catch((error) =>
      res
        .status(500)
        .send({ message: "Algo salió mal, usuario no creado", data: error })
    );
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ where: { email } }).then((user) => {
    if (!user) return res.sendStatus(401);
    user.validatePassword(password).then((isValid) => {
      if (!isValid) return res.sendStatus(401);
      const payload = {
        name: user.name,
        lastName: user.lastName,
        email: user.email,
      };
      const token = generateToken(payload);

      res.cookie("token", token);
      res.send({message: "Te logueaste correctamente" ,data:payload});
    });
  });
});

router.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.sendStatus(204);
});

module.exports = router;
