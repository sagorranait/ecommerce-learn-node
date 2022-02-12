const path = require('path')
const express = require('express');
const route = require('./routers/router');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(route);


app.listen(4040, ()=>{
  console.log('Server is runing on 4040 !');
});