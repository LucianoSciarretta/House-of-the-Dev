const S = require("sequelize");
const db = require("../config/db");

class Favorite extends S.Model {}

Favorite.init({

},
 { sequelize: db,
	 modelName: "user" });

	 module.exports = Favorite