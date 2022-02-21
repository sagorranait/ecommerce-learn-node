const express = require('express');
const { 
  addProduct, 
  adminProduct, 
  adminProducts,
  getEditProduct,
  editProduct,
  deleteProduct
} = require('../controllers/admin-routes');

const router = express.Router();

router.get('/add-product', addProduct);
router.post('/product', adminProduct);
router.get('/products', adminProducts);
router.get('/edit-product/:productId', getEditProduct);
router.post('/edit-product', editProduct);
router.post('/delete-product', deleteProduct);

module.exports = router