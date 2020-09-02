const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// -------------------Register-------------//

const register = async (req, res) => {
  const {
    name, lastname, email, password, phoneNumber, address,
  } = req.body;
  console.log(req.body);
  try {
    // Save to  database
    const user = new User({
      name,
      lastname,
      email,
      password,
      phoneNumber,
      address,
      role: 0,
    });
    // Crypt password
    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);
    await user.save();
    console.log(user, 'create user');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// -------------------Get user by token ----------------//

const getUser = async (req, res) => {
  const {
    id: _id, role, email, name, lastname, address, phoneNumber,
  } = await User.findById(req.user.id);

  res.status(200).json({
    _id,
    isAdmin: role !== 0,
    isAuth: true,
    email,
    name,
    lastname,
    role,
    address,
    phoneNumber,
  });
  console.log(req.user, 'user back');
};

// -------------------Get user by id from Params-------------//

const userGet = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.status(200).json({
    _id: user.id,

    email: user.email,
    name: user.name,
    lastname: user.lastname,
    role: user.role,
    address: user.address,

    phoneNumber: user.phoneNumber,

  });
  console.log(user, 'user back');
};

// -------------------Login-------------//

const login = async (req, res) => {
  const { email, password } = req.body;
  // console.log(req.body, "back");
  try {
    // if the user exists****

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        errors: [
          {
            msg: 'Invalid Credentials',
          },
        ],
      });
    }
    // console.log(user, "user login back2");

    const isMatch = await bcrypt.compare(password, user.password);
    // console.log(user.password, "user password back");
    if (!isMatch) {
      return res.status(400).json({
        errors: [
          {
            msg: 'Invalid Credentials',
          },
        ],
      });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(payload, 'jwtSecret', { expiresIn: 3600000 }, (err, token) => {
      res.json({ token });
      console.log(token);
    });
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server error');
  }
  return null;
};

// -------------------Logout-------------//

const logout = async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      // eslint-disable-next-line no-underscore-dangle
      { _id: req.user._id },
      { token: '' },
    );
    console.log(user);
    return res.status(200).send({
      success: true,
    });
  } catch (error) {
    return res.json({ success: false, error });
  }
};

// -------------------Delete User-------------//

const userDelete = (req, res, next) => {
  User.findByIdAndRemove(req.params.id, (err) => {
    if (err) return next(err);
    return res.send('Deleted successfully!');
  });
};

// -------------------Get all Users-------------//

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    console.log(users);
    console.log('1111111111111');
    res.json(users);
  } catch (err) {
    res.json({ err });
    console.log('22222222222222');
    console.log(err);
  }
};

module.exports = {
  register,
  login,
  getUser,
  logout,
  userDelete,
  userGet,
  getAllUsers,

};
