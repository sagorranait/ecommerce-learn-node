const mongodb = require('mongodb');
const { getDb } = require('../helpers/database');

module.exports = class Products{
  constructor(title, imageUrl, description, price, id){
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
    this._id = id ? new mongodb.ObjectId(id) : null;
  }

  save(){
    const db = getDb();
    let dbOperation;
    if (this._id) {
      dbOperation = db.collection('products')
      .updateOne({ _id: this._id }, {$set: this});
    } else {
      dbOperation = db.collection('products').insertOne(this);
    }
    return dbOperation.then(result => {
      console.log(result);
    })
    .catch(err => console.error(err));
  }

  static fetchAll(){
     return getDb().collection('products').find().toArray()
     .then(product => {
       console.log(product);
       return product;
     })
     .catch(err => console.error(err));
  }

  static productDetalisById(id){
    const db = getDb();
    return db.collection('products')
    .find({ _id: new mongodb.ObjectId(id)})
    .next()
    .then(product => {
      return product;
    })
    .catch(err => console.error(err));
  }

  static deleteProduct(id){
    const db = getDb();
    return db.collection('products').deleteOne({ _id: new mongodb.ObjectId(id)}).then(result => {
      console.log('Deleted !!!');
    }).catch(err => console.log(err));
  }

}