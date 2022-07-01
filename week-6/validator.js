// Title: Future Value App
// Author: Professor Kumar
// Modified by: Ferdinand Detres
// Date: July 1 2022
// Description: Javascript class with a constructor
//Code came from class instructions
// https://medium.com/@samjwright/nan-in-javascript-explained-8808d8cbecfe
//https://www.javascripttutorial.net/es6/javascript-static-properties/

//importing of js modules

import { RequiredField } from "./required-field.js";
import { FloatField } from "./float-field.js";
import { FloatMinField } from "./float-min-field.js";
import { FloatMaxField } from "./float-max-field.js";

//class with properties of empty arrays that will take messages and validate inputs from imported classes.
export class Validator {
  validators = [];
  messages = [];

  constructor(name, field) {
    this.name = name;
    this.field = field;
  }

  addRequiredField() {
    this.validators.push(new RequiredField(this.name, this.field));
  }

  addRequiredFloatField() {
    this.validators.push(new FloatField(this.name, this.field));
  }

  addFloatMinField(min) {
    this.validators.push(new FloatMinField(this.name, this.field, min));
  }

  addFloatMaxField(max) {
    this.validators.push(new FloatMaxField(this.name, this.field, max));
  }

  // calls validate function assigns this.validators to variable valid which then iterates over the validator objects to check if error message is needed
  validate() {
    for (let valid of this.validators) {
      if (!valid.validate()) {
        this.messages.push(valid.getMessage());
        return false;
      }
    }
    return true;
  }
}
