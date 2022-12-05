const { validateToken } = require("../config/token");

function validateAuth(req, res, next) {
  const token = req.cookies.token;
  console.log("TOKEN:::" , token)
  if (!token) return res.sendStatus(401);

	//validate token devuelve el payload
  const { user } = validateToken(token);
  if (!user) return res.sendStatus(401);
  console.log("USER:::", user)

  req.user = user;

  next();
}
module.exports = { validateAuth };
