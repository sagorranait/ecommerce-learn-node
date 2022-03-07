const path = require('path');
const express = require('express');
const userRoute = require('./routers/user-router');
const adminRoute = require('./routers/admin-router');
const { mongoConnect } = require('./helpers/database');


const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use((req, res, next)=>{
  // User.findAll({where: {id: 1}})
  // .then(([user])=>{
  //   req.user = user;
  //   next();
  // })
  // .catch(err => console.error(err))

  next();
});

app.use(userRoute);
app.use('/admin', adminRoute);
app.use((req, res, next)=>{
  res.status(404).send('<h1>Page not found !!!</h1>');
});

mongoConnect(() => {
  app.listen(4040, ()=>{
    console.log('server is running');
  });
});
