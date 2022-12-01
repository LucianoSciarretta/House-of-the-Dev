const express = require("express");
const { Op } = require("sequelize");
const router = express.Router();
const Property = require("../models/property");


//Grilla de propiedades
router.get("/", (req, res) => {
  Property.findAll()
    .then((properties) => res.send(properties))
    .catch((error) =>
      res
        .status(500)
        .send({ message: "Ocurrió un error", data: error })
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
        { neighborhood: req.params.search},
        { adress: req.params.search },
      ],
    },
  }).then((property) => {
    console.log(property)
    res.send(property)
  })
    .catch(() => console.log("Hubo bardo"))
});

module.exports = router;

// get('/', (req, res )=>{
//   Property.findOne({where: {[Op.or]:[{categoria: req.body.categroria}, {ubicacion: req.body.ubicacion}, {pais: req.body.pais}]}})
//   })
