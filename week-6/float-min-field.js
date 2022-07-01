// Title: Future Value App
// Author: Professor Kumar
// Modified by: Ferdinand Detres
// Date: July 1 2022
// Description: Javascript class with a constructor
//Code came from class instructions
// https://medium.com/@samjwright/nan-in-javascript-explained-8808d8cbecfe
//https://www.javascripttutorial.net/es6/javascript-static-properties/

export class FloatMinField {
  constructor(name, field, min) {
    this.name = name;
    this.field = field;
    this.min = min;
  }

  //check to see minimum amount of characters are entered
  validate() {
    if (parseFloat(this.field) > this.min) {
      return true;
    }
    return false;
  }
  //error message
  getMessage() {
    return `${this.name} must be more than ${this.min}. You entered ${this.field}`;
  }
}
