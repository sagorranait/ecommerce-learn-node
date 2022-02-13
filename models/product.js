const products = [];

module.exports = class Products{
  constructor(id, title, imageUrl, description, price){
    // this.id = Math.random();
    // this.title = title;
    // this.imageUrl = imageUrl;
    // this.description = description;
    // this.price = price;
    this.storeProduct = {id, title, imageUrl, description, price}
  }

  save(){
    products.push( this.storeProduct );
  }

  static fetchAll(){
    return products;
  }

  static productDetalisById(id){
    const product = products.find(p => {
      console.log(p);
      return p.id === id;
    });
    console.log(product);
    return product;
  }
}