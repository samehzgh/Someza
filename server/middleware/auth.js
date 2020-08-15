const { User } = require("../models/User");
const jwt = require("jsonwebtoken");
const auth = (req, res, next) => {
  let token = req.header("x-auth-token");
console.log(token)
  //Check if not token
  if (!token) {
    return res.status(403).json({ msg: "No token, authoriwation denied" });
  }

  //Verify token
  try {
    const decoded = jwt.verify(token, "jwtSecret");

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(403).json({ msg: "Token is not valid" });
  }
};
module.exports = { auth };