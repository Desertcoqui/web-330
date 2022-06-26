// Title: Bob Repair
// Author: Professor Kumar
// Modified by: Ferdinand Detres
// Date: June 26 2022
// Description: Javascript class with a constructor

export class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.id = Math.random().toString(16).slice(2);
  }
}
