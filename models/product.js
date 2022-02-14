const products = [];

module.exports = class Products{
  constructor(id, title, imageUrl, description, price){
    this.storeProduct = {id, title, imageUrl, description, price}
  }

  save(){
    products.push( this.storeProduct );
  }

  static fetchAll(){
    return products;
  }

  static productDetalisById(id){
    const product = [products];
    return product.find(p => p.id === id);
  }
}