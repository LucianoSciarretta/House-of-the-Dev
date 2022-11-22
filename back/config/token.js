const jwt = require("jsonwebtoken");

const SECRET = "bandoneón";

const generateToken = (payload) => {
  const token = jwt.sign({user: payload}, SECRET, {expiresIn: "365d"});
  return token;
};

const validateToken = (token) => {
 return jwt.verify(token, SECRET)
};

module.exports = { generateToken, validateToken };
