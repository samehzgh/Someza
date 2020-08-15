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
  .get("/:id", productGet)

  //------------------Update Product---------------------//
  .put("/:id/update", productUpdate)

  //------------------Delete Product---------------------//
  .delete("/:id/delete", productDelete)

  //------------------Get All Products---------------------//
  .get("/", getAllProducts);

module.exports = router;
