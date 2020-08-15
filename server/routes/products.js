const express = require("express");
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
  .post("/add", productAdd)

  //------------------Get Product with id (params)-----------//
  .get("/product/:id", productGet)

  //------------------Update Product---------------------//
  .put("/product/:id/update", productUpdate)

  //------------------Delete Product---------------------//
  .delete("/product/:id/delete", productDelete)

  //------------------Get All Products---------------------//
  .get("/all", getAllProducts);

module.exports = router;
