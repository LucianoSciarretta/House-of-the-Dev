const jwt = require("jsonwebtoken");

const SECRET = "bandoneón";

const generateToken = (payload) => {
  // las propiedades de expiration date y issued at se guardan en el objeto.Al asignarle a user el payload solamente me quedan los datos del usuario. Se le agregan más tarde esas dos variables. En user ya queda guardado el payload.
  const token = jwt.sign({user: payload}, SECRET, {expiresIn: "365d"});
  return token;
};


//Comprueba que el token no haya sido alterado. Realiza un hash del header y el payload y lo compara con el signature
const validateToken = (token) => {

  //verfy  recibe un token y un secret. Comprueba que el signature sea el correcto .Si todo es correcto devuelve el payload
 return jwt.verify(token, SECRET)  //retorna el payload
};

module.exports = { generateToken, validateToken };
