const { validateToken } = require("../config/token");

const validateRolAdmin = (token) => {
  const { user } = validateToken(token);
  console.log("isAdmin:",user.isAdmin);
  if (!user.isAdmin) return false;
  return true;
};


module.exports = validateRolAdmin