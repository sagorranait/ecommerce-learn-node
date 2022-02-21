const Product = require('../models/product');

const shopRoutes = (req, res, next) => {
  Product.findAll()
  .then(products => {
    res.render('./shop/index', {
      products: products,
      pageTitle: 'Shop Page',
      path: '/'
    });
  })
  .catch(err => console.log(err));
}

const productsRoutes = (req, res, next) => {
  Product.findAll()
  .then(products => {
    res.render('./shop/product-list', {
      products: products,
      pageTitle: 'All Products',
      path: '/products'
    })
  })
  .catch(err => console.log(err));
}

const productsDetalis = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findAll({
    where: {
      id: prodId
    }
  })
  .then(([products]) => {
    res.render('./shop/product-detail', {
      products: products,
      pageTitle: products.title,
      path: '/products'
    })
    console.log(products)
  })
  .catch(err => console.error(err));
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
  productsDetalis,
  ordersRoutes,
  ordersCart,
  checkoutRoutes
}