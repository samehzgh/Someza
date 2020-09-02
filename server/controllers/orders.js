const Order = require('../models/Order');
const Product = require('../models/Product');

// ------------add Order-----------------//

const orderAdd = async (req, res, next) => {
  // eslint-disable-next-line no-underscore-dangle
  const userID = req.user._id;
  const productID = req.params.productId;
  console.log(userID);
  console.log(productID);

  const { category } = await Product.findById(productID);

  const order = new Order({ ClientId: userID, ProductId: productID, category });
  console.log(order);
  order.save((err) => {
    if (err) {
      return next(err);
    }
    return res.send('Order Added successfully');
  });
  console.log(order);
};

// ----------Get order with id from params-------------//

const getOrder = (req, res, next) => {
  Order.findById(req.params.id, (err, order) => {
    if (err) return next(err);
    return res.send(order);
  });
};

// ------------delete Order-----------------//

const orderDelete = (req, res, next) => {
  Order.findByIdAndRemove(req.params.id, (err) => {
    if (err) return next(err);
    return res.send('Deleted successfully!');
  });
};

// ----------Get All Orders-------------//

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({});
    res.json(orders);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// ----------Get user's Orders-------------//

const getOrders = async (req, res) => {
  // eslint-disable-next-line no-underscore-dangle
  const userID = req.user._id;

  console.log(userID);

  const orders = await Order.find({ ClientId: userID }).exec();
  res.json(orders);
};

const changeStatus = async (req, res, next) => {
  await Order.findByIdAndUpdate(
    req.params.id,
    { Status: req.body.Status },
    (err) => {
      if (err) return next(err);
      return res.send(' Status changed.');
    },
  );
};

module.exports = {
  orderAdd,
  getOrder,
  orderDelete,
  getAllOrders,
  getOrders,
  changeStatus,
};
