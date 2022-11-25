const S = require("sequelize");
const db = require("../config/db");

class Property extends S.Model {}

Property.init(
  {
    price: {
      type: S.INTEGER,
      allowNull: false,
    },
    propertyType: {
      type: S.STRING,
      allowNull: false,
    },
    rooms: {
      type: S.INTEGER,
      allowNull: true,
    },
    country: {
      type: S.STRING,
      allowNull: false,
    },
    location: {
      type: S.STRING,
      allowNull: false,
    },
    neighborhood: {
      type: S.STRING,
      allowNull: false,
    },
    adress: {
      type: S.STRING,
      allowNull: false,
    },
    image: {
      type: S.STRING,
      allowNull:true
    }

  },
  { sequelize: db, modelName: "property" }
);

module.exports = Property;
