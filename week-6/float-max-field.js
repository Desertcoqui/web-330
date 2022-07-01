// Title: Future Value App
// Author: Professor Kumar
// Modified by: Ferdinand Detres
// Date: July 1 2022
// Description: Javascript class with a constructor
//Code came from class instructions
// https://medium.com/@samjwright/nan-in-javascript-explained-8808d8cbecfe
//https://www.javascripttutorial.net/es6/javascript-static-properties/

export class FloatMaxField {
  constructor(name, field, max) {
    this.name = name;
    this.field = field;
    this.max = max;
  }
  // checks to see if max amount of characters input is surpassed
  validate() {
    if (parseFloat(this.field) < this.max) {
      return true;
    }
    return false;
  }

  //error message if validator fails
  getMessage() {
    return `${this.name} must be less than ${this.max}. You entered ${this.field}. That's too many numbers dude!`;
  }
}
