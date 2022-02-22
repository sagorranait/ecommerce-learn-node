const path = require('path');
const express = require('express');
const userRoute = require('./routers/user-router');
const adminRoute = require('./routers/admin-router');
const sequelize = require('./helpers/database');
const Product = require('./models/product');
const User = require('./models/users');
const Cart = require('./models/cart');
const CartItem = require('./models/cart-item');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use((req, res, next)=>{
  User.findAll({where: {id: 1}})
  .then(([user])=>{
    req.user = user;
    next();
  })
  .catch(err => console.error(err))
});

app.use(userRoute);
app.use('/admin', adminRoute);
app.use((req, res, next)=>{
  res.status(404).send('<h1>Page not found !!!</h1>');
});

Product.belongsTo(User, {constraints: true, onDelete: 'CASCADE'});
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });

sequelize.sync()
.then(res => {
  return User.findAll({where: {id: 1}});
})
.then(([user]) => {
  if (!user) {
    return User.create({ name: 'sagor', email: 'sagor@gmail.com' })
  }
  return user;
})
.then(user => {
  return user.createCart();
})
.then(cart => {
  app.listen(4040, ()=>{
    console.log('Server is runing on 4040 !');
  });
})
.catch(err => console.error(err));