const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const acl = require("../middleware/acl");
const {
  register,
  login,
  getUser,
  logout,
  userDelete,
  userGet,
  getAllUsers,
} = require("../controllers/users");

router

  //------------------Register---------------------//
  .post("/register", register)

  //------------------Get user by token---------------------//
  .get("/login", auth, getUser)

  //------------------Login---------------------//
  .post("/login", login)

  //------------------Logout---------------------//
  .get("/logout", auth, logout)

  //------------------delete userby id (params)---------------------//
  .delete("/user/:id/delete", auth,acl,userDelete)

  //------------------Get user by id (params)---------------------//
  .get("/user/:id",auth, userGet)

  //------------------Get all users---------------------//

  .get("/all",auth,acl, getAllUsers);

module.exports = router;
