module.exports = ({user}, res, next) => {
  if (!user) {
    return res.status(403).json({ msg: "No token, authoriwation denied" });
  }

  console.dir({user});

  if(user.role !== 0) {
    next();
  } else {
    res.status(403).json({ msg: "Operation denied!" });  
  }
};