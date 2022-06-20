// Title: Assignment 4
// Author: Professor Kumar
// Date: 18 June 21
// Modified By: Ferdinand "Papo" Detres Jr
// Description: This week's project is a Calorie Counter
// Code Attributions: The classes and id's were taken from the CSS styleguide provided by Bellevue.
// https://www.javascripttutorial.net/es6/javascript-static-method/
// https://www.w3schools.com/jsref/jsref_tolowercase.asp
// http://www.foreui.com/articles/Key_Code_Table.htm
// https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
// https://stackoverflow.com/questions/17925501/how-to-trigger-another-keycode-after-catching-enter-keycode13

//Imports Food Class from food-model.js file with constructor parameters of food, name and calories
import { FoodModel } from "./food-model.js";

export class CalorieConverter {
  //Creates an array of objects using the FoodModel class
  static data = [
    new FoodModel(1007, "Egg", 78),
    new FoodModel(1008, "Apple", 95),
    new FoodModel(1009, "Hamburger", 354),
    new FoodModel(1010, "Fries", 400),
    new FoodModel(1011, "Banana", 105),
    new FoodModel(1012, "Soda", 150),
  ];

  // This function searches and compares user input to return an array of FoodModel objects through its index
  static find(str) {
    return this.data.filter((data) => {
      if (str.includes(data.name.toLowerCase())) {
        return data;
      }
    });
  }
}
