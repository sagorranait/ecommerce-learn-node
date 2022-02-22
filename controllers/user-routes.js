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
  req.user.getCart()
  .then(cart => {
    return cart.getProducts()
    .then(products => {
      res.render('./shop/cart', {
        pageTitle: 'Our Cart',
        path: '/cart',
        products: products
      });
    })
    .catch(err => console.log(err));
  })
  .catch(err => console.log(err));
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

const addCart = (req, res, next) => {
  const prodId = req.body.productId;
  let fetchedCart;
  let newQuantity = 1;
  req.user
    .getCart()
    .then(cart => {
      fetchedCart = cart;
      return cart.getProducts({ where: { id: prodId } });
    })
    .then(products => {
      let product;
      if (products.length > 0) {
        product = products[0];
      }

      if (product) {
        const oldQuantity = product.cartItem.quantity;
        newQuantity = oldQuantity + 1;
        return product;
      }
      return Product.findAll({ where: {id: prodId} });
    })
    .then((product) => {
      return fetchedCart.addProduct(product, {
        through: { quantity: newQuantity }
      });
    })
    .then(() => {
      res.redirect('/cart');
    })
    .catch(err => console.log(err));
}

const deleteCart = (req, res, next) => {
  const prodId = req.body.productId;
  req.user
    .getCart()
    .then(cart => {
      return cart.getProducts({ where: { id: prodId } });
    })
    .then(products => {
      const product = products[0];
      return product.cartItem.destroy();
    })
    .then(result => {
      res.redirect('/cart');
    })
    .catch(err => console.log(err));
}

module.exports = {
  shopRoutes,
  productsRoutes,
  productsDetalis,
  ordersRoutes,
  ordersCart,
  addCart,
  deleteCart,
  checkoutRoutes
}