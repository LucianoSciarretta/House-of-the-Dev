const express = require("express");
const router = express.Router();
const { User, Property } = require("../models");

//favoritos
router.post("/favorites", (req, res) => {
  Property.create({
    price: 300000,
    propertyType: "casa",
    rooms: 3,
    country: "argentina",
    location: "buenos aires",
    neighborhood: "caballito",
    adress: "av diaz velez 5508",
    image: "foto",
  }).then((property) => {
    User.findOne({ where: { id: 1 } })
      .then((user) => {
        user.addFavorites(property);
        res.sendStatus(200);
      })
      .catch((error) =>
        res.send({ message: "No se pudo agregar a favoritos", data: error })
      );
  });
});

// Ver un favorito
router.get("/favorites", (req, res) => {
  User.findOne({ where: { id: 1 }, include: "favorites" })
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
