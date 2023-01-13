const express = require("express");
const { Op } = require("sequelize");
const router = express.Router();
const Property = require("../models/property");

//Grilla de propiedades
router.get("/", (req, res) => {
  Property.findAll()
    .then((properties) => res.send(properties))
    .catch((error) =>
      res.status(500).send({ message: "Ocurrió un error", data: error })
    );
});

//Buscador de propiedades
router.get("/search/:search", (req, res) => {
  Property.findAll({
    where: {
      [Op.or]: [
        { propertyType: req.params.search },
        { country: req.params.search },
        { location: req.params.search },
        { neighborhood: req.params.search },
        { adress: req.params.search },
      ],
    },
  })
    .then((property) => {
      res.send(property);
    })
    .catch(() => console.log("Hubo bardo"));
});

//Ordenar  por menor precio
router.get("/lessValue", (req, res) => {
  Property.findAll()
    .then((properties) => {
      console.log(properties);
      properties.sort((a, b) => {
        return a.price - b.price;
      });
      console.log("PROPERTIES", properties);
      res.send(properties);
    })
    .catch((error) => console.log("Ocurrió un error"));
});

//Ordenar por mayor precio

router.get("/moreValue", (req, res) => {
  Property.findAll()
    .then((properties) => {
      console.log(properties);
      properties.sort((a, b) => {
        return b.price - a.price;
      });
      console.log("PROPERTIES", properties);
      res.send(properties);
    })
    .catch((error) => console.log("Ocurrió un error"));
});

//Por cantidad de ambientes
router.get("/rooms/:roomNumber", (req, res) => {
  const roomNumber = req.params.roomNumber
  Property.findAll({ where: { rooms: roomNumber } })
    .then((properties) => res.send(properties))
    .catch((error) => console.log("Hubo un problema"));
});

module.exports = router;


