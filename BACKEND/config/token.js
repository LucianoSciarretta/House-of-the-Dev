const jwt = require("jwtoken");

const SECRET = "bandoneón";

const generateToken = (payload) => {
  const token = jwt.sign(payload, SECRET, {expiresIn: "365d"});
  return token;
};

const validateToken = () => {};

module.exports = { generateToken, validateToken };
