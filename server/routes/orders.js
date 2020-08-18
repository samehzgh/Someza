const express = require("express");
const auth = require("../middleware/auth");
const acl = require("../middleware/acl");

const router = express.Router();
const {
  orderAdd
} = require("../controllers/orders");

router
.post('/add/:productId' ,auth,orderAdd);



module.exports = router;