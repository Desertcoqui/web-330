// Title: Future Value App
// Author: Professor Kumar
// Modified by: Ferdinand Detres
// Date: July 1 2022
// Description: Javascript class with a constructor
//Code came from class instructions
// https://medium.com/@samjwright/nan-in-javascript-explained-8808d8cbecfe

export class FloatField {
  constructor(name, field) {
    this.name = name;
    this.field = field;
  }
  // Checks to see if you can PARSE float
  validate() {
    if (isNaN(this.field)) {
      return false;
    }
    return true;
  }
  // error message
  getMessage() {
    return `${this.name} must be a string, you entered ${this.field}`;
  }
}
