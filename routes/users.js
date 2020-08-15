const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");

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
  .delete("/:id/delete", userDelete)

  //------------------Get user by id (params)---------------------//
  .get("/:id", userGet)

  //------------------Get user by id (params)---------------------//

  .get("/", getAllUsers);

module.exports = router;
