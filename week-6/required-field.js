// Title: Future Value App
// Author: Professor Kumar
// Modified by: Ferdinand Detres
// Date: July 1 2022
// Description: Javascript class with a constructor
//Code came from class instructions
// https://medium.com/@samjwright/nan-in-javascript-explained-8808d8cbecfe
//https://www.javascripttutorial.net/es6/javascript-static-properties/

export class RequiredField {
  constructor(name, field) {
    this.name = name;
    this.field = field;
  }
  validate() {
    return Boolean(this.field);
  }
  getMessage() {
    return `${this.name} is a required field!`;
  }
}
