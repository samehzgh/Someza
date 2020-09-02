const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  ClientId: {
    type: mongoose.ObjectId,
    // required: true,
  },
  ProductId: {
    type: mongoose.ObjectId,
    // required: true,
  },
  category: {
    type: String,
  },
  Status: {
    type: String,
    default: 'en attente',
  },

  date: {
    type: Date,
    default: Date.now,
  },
});
const Order = mongoose.model('order', OrderSchema);
module.exports = Order;
