const Product = require("../models/Product");

//----------Add a product-------------//

const productAdd = (req, res) => {
  let product = new Product({
    name: req.body.name,
    reference: req.body.reference,
    description: req.body.description,
    category: req.body.category,
    type: req.body.type,
    material: req.body.material,
    price: req.body.price,
  });

  product.save(function (err) {
    if (err) {
      return next(err);
    }
    res.send("Product Added successfully");
  });
};

//----------Get a product with id from params-------------//

const productGet = (req, res) => {
  Product.findById(req.params.id, function (err, product) {
    if (err) return next(err);
    res.send(product);
  });
};

//----------Update a product with id from params-------------//
//-------------------also update Date-----------------------//

const productUpdate = (req, res) => {
  Product.findByIdAndUpdate(req.params.id, { $set: req.body }, function (
    err,
    product
  ) {
    if (err) return next(err);
  });

  Product.findByIdAndUpdate(req.params.id, { date: Date.now() }, function (
    err,
    product
  ) {
    if (err) return next(err);
    res.send(" Product udpated.");
  });

  //----------Delete a product with id from params-------------//
};
const productDelete = (req, res) => {
  Product.findByIdAndRemove(req.params.id, function (err) {
    if (err) return next(err);
    res.send("Deleted successfully!");
  });
};

//----------Get All Products-------------//

const getAllProducts = async (req, res) => {

  try {
    let products = await Product.find({});
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  productAdd,
  productGet,
  productUpdate,
  productDelete,
  getAllProducts,
};
