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
  Products.create({
    title: title,
    price: price,
    imgUrl: imageUrl,
    description: description
  })
  .then(response => {
    res.redirect('/');
  })
  .catch(err => console.log(err));
}

const adminProducts = (req, res, next) => {
  Products.findAll()
  .then(product => {
    res.render('admin/products', {
      products: product,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  })
  .catch(err => console.error(err));
}

module.exports = {
  addProduct,
  adminProduct,
  adminProducts
}