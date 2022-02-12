const products = [];

module.exports = class Products{
  constructor(title, imageUrl, description, price){
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save(){
    products.push(this);
  }

  static fetchAll(){
    return products;
  }
}