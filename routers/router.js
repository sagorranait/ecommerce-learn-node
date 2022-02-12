const express = require('express');

const router = express.Router();

router.get('/', (req, res, next)=>{
  res.render('./shop/index', {
    pageTitle : 'Shop Page',
    path : '/'
  });
});

module.exports = router;