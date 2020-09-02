const mongoose = require('mongoose');

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
    type: String,
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

});

const User = mongoose.model('User', UserSchema);

module.exports = User;
