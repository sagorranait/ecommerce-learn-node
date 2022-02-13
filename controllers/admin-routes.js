const Products = require('../models/product');

const addProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add New Product',
    path: '/admin/add-product'
  });
}

const adminProduct = (req, res, next) => {
  const id = Math.random();
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Products(id, title, imageUrl, description, price);
  product.save();
  res.redirect('/');
}

const adminProducts = (req, res, next) => {
  res.render('admin/products', {
    pageTitle: 'Admin Products',
    path: '/admin/products'
  });
}

module.exports = {
  addProduct,
  adminProduct,
  adminProducts
}