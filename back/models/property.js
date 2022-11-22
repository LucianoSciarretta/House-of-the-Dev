const S = require("sequelize");
const db = require("../config/db");

class Property extends S.Model {}

Property.init({
    price: {
        type:S.INTEGER,
        allowNull:S.FALSE
    },
    propertyType: {
        type: S.STRING,
        allowNull:S.FALSE
    }, 
    rooms: {
        type: S.INTEGER,
        allowNull:S.TRUE       
    },
    country: {
        type:S.STRING,
        allowNull:S.FALSE
    },
    location:{
        type:S.STRING,
        allowNull:S.FALSE
    },
    neighborhood: {
        type: S.STRING,
        allowNull:S.false
    },
    adress: {
        type:S.STRING,
        allowNull:S.FALSE
    }


}, 
{ sequelize: db,
 modelName: "property" });
