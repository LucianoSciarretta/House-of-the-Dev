const express = require("express");
const router = express.Router();
const { User, Property } = require("../models");

//favoritos
router.post("/favorites", (req, res) => {
  const { email, property } = req.body;
  Property.findOne({
    where: { id: property.id },
    // price: property.price,
    // propertyType: property.propertyType,
    // rooms: property.rooms,
    // country: property.country,
    // location: property.location,
    // neighborhood: property.neighborhood,
    // adress: property.adress,
    // image: property.image,
  }).then((property) => {
    User.findOne({ where: { email: email } })
      .then((user) => {
        console.log("USER:::", user);
        user.addFavorites(property);
        res.sendStatus(200);
      })
      .catch((error) =>
        res.send({ message: "No se pudo agregar a favoritos", data: error })
      );
  });
});

// Ver favoritos
router.get("/favorites/:email", (req, res) => {
  const email = req.params.email
  User.findOne({ where: { email }, include: "favorites" })
    .then((user) => res.send(user.favorites))
    .catch((error) => res.send(" Error en la petición"));
});

router.delete("/favorites", (req, res) => {
  const userId = 1;
  const propertyId = 7;
  User.findOne({ where: { id: userId } })
    .then((user) => user.removeFavorite(propertyId))
    .then(() => res.sendStatus(200))
    .catch((error) => res.send({ message: "Ocurrió un error", data: error }));
});

module.exports = router;
