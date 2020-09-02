const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  reference: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,

  },
  category: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  material: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: 'path',
  },
  price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const Product = mongoose.model('product', ProductSchema);
module.exports = Product;
