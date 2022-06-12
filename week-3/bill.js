// Title: Assignment 3
// Author: Professor Kumar
// Date: 11 June 21
// Modified By: Ferdinand "Papo" Detres Jr
// Description: This week's project is a Restaurant App
// Code Attributions: The classes and id's were taken from the CSS styleguide provided by Bellevue.
// https://css-tricks.com/snippets/css/a-guide-to-flexbox/
// https://rollbar.com/blog/javascript-constructors/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array
// https://www.w3schools.com/jsref/prop_checkbox_value.asp
// https://www.tutorialspoint.com/es6/es6_modules.htm
// https://www.youtube.com/watch?v=Q3SBogjUfMk

export class Bill {
    _beverages = [];
    _appetizers = [];
    _mainCourses = [];
    _desserts = [];

    addBeverage(beverage){
        this._beverages.push(beverage);
    }
    addAppetizer(appetizer){
        this._appetizers.push(appetizer);
    }
    addMainCourse(mainCourse) {
        this._mainCourses.push(mainCourse);
    }
    addDessert(dessert){
        this._desserts.push(dessert);
    }
    getTotal(){

        let total = 0;

        // loops over each array and calculates prices
        this._beverages.forEach(function (beverages) {
            total += parseFloat(beverage.price);
          });
         this._appetizers.forEach(function (appetizers) {
            total += parseFloat(appetizer.price);
          });
          this._mainCourses.forEach(function (mainCourses) {
            total += parseFloat(mainCourse.price);
          });
          this._desserts.forEach(function (desserts) {
            total += parseFloat(dessert.price);
          });
          console.log(total);
         return total.toFixed(2);
    }
}

