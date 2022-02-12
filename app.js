const path = require('path');
const express = require('express');
const userRoute = require('./routers/user-router');
const adminRoute = require('./routers/admin-router');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(userRoute);
app.use('/admin', adminRoute);
app.use((req, res, next)=>{
  res.status(404).send('<h1>Page not found !!!</h1>');
});



app.listen(4040, ()=>{
  console.log('Server is runing on 4040 !');
});