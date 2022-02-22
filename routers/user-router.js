const express = require('express');
const { 
  shopRoutes,
  productsRoutes,
  productsDetalis,
  ordersRoutes, 
  ordersCart,
  addCart,
  deleteCart,
  checkoutRoutes
} = require('../controllers/user-routes');

const router = express.Router();

router.get('/', shopRoutes);
router.get('/products', productsRoutes);
router.get('/products/:productId', productsDetalis);
router.get('/cart', ordersCart);
router.post('/cart', addCart);
router.post('/cart-delete-item', deleteCart);
router.get('/orders', ordersRoutes);
router.get('/checkout', checkoutRoutes);

module.exports = router;