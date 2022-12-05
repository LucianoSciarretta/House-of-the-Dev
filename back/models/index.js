const User = require("./users");
const Property = require("./property");

Property.belongsToMany(User, {through: "favorites_properties" ,as:"favorites"})
User.belongsToMany(Property, {through: "favorites_properties" ,as:"favorites"})

module.exports = { User, Property };

