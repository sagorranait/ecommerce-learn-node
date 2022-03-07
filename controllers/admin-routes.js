const Products = require('../models/product');

const addProduct = (req, res, next) => {
  res.render('admin/add-product', {
    pageTitle: 'Add New Product',
    path: '/admin/add-product'
  });
}

const adminProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const products = new Products(title, imageUrl, price, description);
  products.save().then(response => {
    res.redirect('/');
  })
  .catch(err => console.log(err));
}

const adminProducts = (req, res, next) => {
  Products.fetchAll()
  .then(product => {
    res.render('admin/products', {
      products: product,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  })
  .catch(err => console.error(err));
}

const getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if(!editMode){
    return res.redirect('/');
  }

  const prodId = req.params.productId;
  Products.productDetalisById(prodId)
  .then(product=>{
    if (!product) {
      return res.redirect('/');
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
      product: product
    })
  })
  .catch(err => console.error(err));
}

const editProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImgUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  const product = new Products(updatedTitle, updatedImgUrl, updatedDesc, updatedPrice, prodId);
  product.save().then(result => {
    console.info('Updated the Product!');
    res.redirect('/admin/products');
  })
  .catch(err => console.error(err));
}

const deleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Products.deleteProduct(prodId)
  .then(() => {
    console.log('Destroy Product !');
    res.redirect('/admin/products');
  })
  .catch(err => console.error(err));
}

module.exports = {
  addProduct,
  adminProduct,
  adminProducts,
  getEditProduct,
  editProduct,
  deleteProduct
}