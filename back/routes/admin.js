const express = require("express");
const router = express.Router();
const { validateToken } = require("../config/token");
const validateRolAdmin = require("../middlewares/validateRolAdmin");
const { User, Property } = require("../models");

//Ruta para mostrar todos los usuarios registrados 
router.get("/", (req, res) => {
  const token = req.cookies.token;
  console.log("TOKEN:::", token);

  if (!token) return res.status(401).send("Ocurrió un problema");
  if (!validateRolAdmin(token)) {
    return res
      .status(403)
      .send("No tiene los permisos necesarios para realizar esta acción");
  }

  User.findAll()
    .then((users) => res.send(users))
    .catch((error) => res.send(error));
});

//Ruta para borrar un usuario
router.delete("/:id", (req, res) => {
  const id = req.params.id
  const token = req.cookies.token;

  if (!token) return res.status(401).send("Ocurrió un problema");
  if (!validateRolAdmin(token)) {
    return res
      .status(403)
      .send("No tiene los permisos necesarios para realizar esta acción");
  }
  User.destroy({ where: { id } })
    .then((deletedUser) =>
      res.status(203).send("Usuario eliminado correctamente")
    )
    .catch((error) => res.status(400).send("No se pudo borrar el usuario"));
});

//Ruta para promover administradores
router.put("/:id", (req, res) => {
  const token = req.cookies.token;
  const id  = req.params.id;
  console.log(id);

  if (!token) return res.sendStatus(401);
  if (!validateRolAdmin(token)) {
    return res.status(403).send("No tiene los permisos necesarios");
  }

  User.update({ isAdmin: true }, { where: { id } }).then((updatedUser) =>
    res.status(200).send("El usuario ahora tiene rol de administrador")
  );
});

//Ruta para crear una casa

router.post("/house", (req, res) => {
  const token = req.cookies.token;
  console.log("TOKEN:", token);
  const house = req.body;
  console.log("HOUSE:", house);
  Property.create(house).then((newHouse) => res.status(201).send(newHouse));
});

//Ruta para eliminar una propiedad

router.delete("/house/:id", (req, res) => {
  const token = req.cookies.token;
  const id = 4;
  Property.destroy({ where: { id } })
    .then(() =>
      res.status(200).send("Propiedad eliminada correctamente")
    )
    .catch((error) =>
      res.send({ message: "No se puedo eliminar la propiedad", data: error })
    );
});


// Ruta para editar una casa

module.exports = router;
