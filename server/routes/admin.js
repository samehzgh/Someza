const express = require('express');
const auth = require('../middleware/auth');
const acl = require('../middleware/acl');

const router = express.Router();

const {

  userDelete,
  getAllUsers,
  userGet,
} = require('../controllers/users');

const {
  productAdd,
  productUpdate,
  productDelete,
} = require('../controllers/products');

const {
  getAllOrders,
  getOrder,
  orderDelete,
  changeStatus,
} = require('../controllers/orders');

router
// -----------------User------------//
// ---------------------------------//
// ------------------Get user by id (params)---------------------//
  .get('/users/:id', auth, acl, userGet)

// ------------------delete userby id (params)---------------------//
  .delete('/users/:id/delete', auth, acl, userDelete)

// ------------------Get all users---------------------//

  .get('/users', auth, acl, getAllUsers)

// -----------------Product------------//
// ---------------------------------//

  // ------------------Add Product---------------------//
  .post('/products/add', auth, acl, productAdd)

  // ------------------Update Product---------------------//
  .put('/products/:id/update', auth, acl, productUpdate)

  // ------------------Delete Product---------------------//
  .delete('/products/:id/delete', auth, acl, productDelete)

// -----------------Order------------//
// ---------------------------------//

// ------------------get order by id (params)---------------------//

  .get('/orders/:id', auth, acl, getOrder)

// ------------------delete order by id (params)---------------------//

  .delete('/orders/:id/delete', auth, acl, orderDelete)

// ------------------change order'status to "en fabrication" by id (params)---------------------//

  .put('/orders/:id/fab', auth, acl, changeStatus)

// ------------------Get all orders---------------------//

  .get('/orders', auth, acl, getAllOrders);

module.exports = router;
