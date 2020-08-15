const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const saltRounds = 10;
(MAX_LOGIN_ATTEMPTS = 5), (LOCK_TIME = 2 * 60 * 60 * 1000);
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
    required: true,
  },

  phoneNumber: {
    type: Number,
  },
  password: {
    type: String,
    minlength: 6,
    required: true,
  },
  address: {
    type: String,
    
  },

  role: {
    type: Number,
    default: 0,
  },
  
  token: {
    type: String,
  },

  date: {
    type: Date,
    default: Date.now,
  },
  loginAttempts: {
    type: Number,
    required: true,
    default: 0,
  },
  lockUntil: {
    type: Number,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
