const express = require('express');
const { 
  shopRoutes,
  productsRoutes,
  ordersRoutes, 
  ordersCart,
  checkoutRoutes
} = require('../controllers/user-routes');

const router = express.Router();

router.get('/', shopRoutes);
router.get('/products', productsRoutes);
router.get('/cart', ordersCart);
router.get('/orders', ordersRoutes);
router.get('/checkout', checkoutRoutes);

module.exports = router;