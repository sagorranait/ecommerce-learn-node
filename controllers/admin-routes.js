const addProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add New Product',
    path: '/admin/add-product'
  });
}

const adminProduct = (req, res, next) => {
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