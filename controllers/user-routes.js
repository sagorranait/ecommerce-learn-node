const Product = require('../models/product');

const shopRoutes = (req, res, next) => {
  res.render('./shop/index', {
    products: Product.fetchAll(),
    pageTitle: 'Shop Page',
    path: '/'
  });
}

const productsRoutes = (req, res, next) => {
  res.render('./shop/product-list', {
    products: Product.fetchAll(),
    pageTitle: 'All Products',
    path: '/products'
  });
}

const ordersCart = (req, res, next) => {
  res.render('./shop/cart', {
    pageTitle: 'Our Cart',
    path: '/cart'
  });
}

const ordersRoutes = (req, res, next) => {
  res.render('./shop/orders', {
    pageTitle: 'Our Order',
    path: '/orders'
  });
}

const checkoutRoutes = (req, res, next) => {
  res.render('./shop/checkout', {
    pageTitle: 'Checkout',
    path: '/checkout'
  });
}

module.exports = {
  shopRoutes,
  productsRoutes,
  ordersRoutes,
  ordersCart,
  checkoutRoutes
}