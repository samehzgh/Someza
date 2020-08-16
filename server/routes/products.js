const express = require("express");
const auth = require("../middleware/auth");
const acl = require("../middleware/acl");

const router = express.Router();
const {
  productAdd,
  productGet,
  productUpdate,
  productDelete,
  getAllProducts,
} = require("../controllers/products");

router

  //------------------Add Product---------------------//
  .post("/add",auth,acl, productAdd)

  //------------------Get Product with id (params)-----------//
  .get("/product/:id", productGet)

  //------------------Update Product---------------------//
  .put("/product/:id/update",auth,acl, productUpdate)

  //------------------Delete Product---------------------//
  .delete("/product/:id/delete",auth,acl, productDelete)

  //------------------Get All Products---------------------//
  .get("/all", getAllProducts);

module.exports = router;
