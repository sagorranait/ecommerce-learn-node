const express = require('express');
const { 
  addProduct, 
  adminProduct, 
  adminProducts 
} = require('../controllers/admin-routes');

const router = express.Router();

router.get('/add-product', addProduct);
router.post('/product', adminProduct);
router.get('/products', adminProducts);


module.exports = router