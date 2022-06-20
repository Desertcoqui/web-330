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

//Creates a class to be used to create other objects of food items
export class FoodModel {
  constructor(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  }
}
