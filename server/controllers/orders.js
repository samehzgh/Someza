const Order = require("../models/Order");

const orderAdd = (req, res, next) => {
        let userID=req.user._id;
        let productID=req.params.productId;
console.log(userID);
console.log(productID);


    let order = new Order({ClientId :userID,ProductId:productID});
        console.log(order);
    order.save(function (err) {
      if (err) {
        return next(err);
      }
      res.send("Order Added successfully");
    });
    console.log(order);



  };



  module.exports={
      orderAdd
  };