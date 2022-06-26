// Title: Bob Repair
// Author: Professor Kumar
// Modified by: Ferdinand Detres
// Date: June 26 2022
// Description: Javascript class with a constructor and iterators

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator

export class ShoppingCart {
  constructor() {
    this.products = [];
  }

  count() {
    return products.length;
  }

  //push product to products empty products array
  add(product) {
    this.products.push(product);
  }

  *[Symbol.iterator]() {
    yield* this.products;
  }
}
