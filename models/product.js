// const db = require('../helpers/database');

// module.exports = class Products{
//   constructor(id, title, imageUrl, description, price){
//     this.id = id;
//     this.title = title;
//     this.imageUrl = imageUrl;
//     this.description = description;
//     this.price = price;
//     this.storeProduct = {id, title, imageUrl, description, price}
//   }

//   save(){
//     return db.execute('INSERT INTO products (title, price, description, imgURL) VALUES (?, ?, ?, ?)', [this.title, this.price, this.description, this.imageUrl]);
//   }

//   static fetchAll(){
//      return db.execute('SELECT * FROM products');
//   }

//   static productDetalisById(id){
//     return db.execute('SELECT * FROM products WHERE products.id = ?', [id]);
//   }

//   static deleteProduct(id){
    
//   }

// }

const Sequelize = require('sequelize');
const sequelize = require('../helpers/database');

const Product = sequelize.define('product', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  imgUrl: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Product;