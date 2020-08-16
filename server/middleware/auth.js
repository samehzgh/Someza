const User = require("../models/User");
const jwt = require("jsonwebtoken");
module.exports = async (req, res, next) => {
  let token = req.header("x-auth-token");
  //Check if not token
  if (!token) {
    return res.status(403).json({ msg: "No token, authoriwation denied" });
  }

  //Verify token
  try {
    const decoded = jwt.verify(token, "jwtSecret");
    console.log(decoded.user.id);
    req.user = await User.findById(decoded.user.id);
    next();
  } catch (err) {
    res.status(403).json({ msg: "Token is not valid"});
  }
};
