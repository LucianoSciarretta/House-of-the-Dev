const User = require("./users")
const Favorite = require("./favorite")
const Property = require("./property")
const { belongsTo } = require("./users")


Favorite.belongsTo(User)
User.hasMany(Favorite)
Favorite.belongsTo(Property)
Property.hasMany(Favorite)