const { json } = require('express');
const Product = require('../models/Product');

// ----------Add a product-------------//

const productAdd = ({ body }, res, next) => {
  const product = new Product(body);

  product.save((err) => {
    if (err) {
      return next(err);
    }
    return res.send('Product Added successfully');
  });
};

// ----------Get a product with id from params-------------//

const productGet = (req, res, next) => {
  Product.findById(req.params.id, (err, product) => {
    if (err) return next(err);
    return res.send(product);
  });
};

// ----------Update a product with id from params-------------//
// -------------------also update Date-----------------------//

const productUpdate = (req, res, next) => {
  Product.findByIdAndUpdate(req.params.id, { $set: req.body }, (err) => {
    if (err) return next(err);
    return json.send('updated');
  });

  Product.findByIdAndUpdate(req.params.id, { date: Date.now() }, (
    err,
  ) => {
    if (err) return next(err);
    return res.send(' Product udpated.');
  });

  // ----------Delete a product with id from params-------------//
};
const productDelete = (req, res, next) => {
  Product.findByIdAndRemove(req.params.id, (err) => {
    if (err) return next(err);
    return res.send('Deleted successfully!');
  });
};

// ----------Get All Products-------------//

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

module.exports = {
  productAdd,
  productGet,
  productUpdate,
  productDelete,
  getAllProducts,
};
