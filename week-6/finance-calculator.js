// Title: Future Value App
// Author: Professor Kumar
// Modified by: Ferdinand Detres
// Date: July 1 2022
// Description: Javascript class with a constructor
//Code came from class instructions
// https://medium.com/@samjwright/nan-in-javascript-explained-8808d8cbecfe
//https://www.javascripttutorial.net/es6/javascript-static-properties/

export class FinanceCalculator {
  static MONTHS_IN_YEAR = 12;
  static calculateFutureValue(monthlyPayment, rate, years) {
    //several variable assigning calculations of compounded interest
    let months = years * this.MONTHS_IN_YEAR;
    let interestRate = 1 + rate / 100;
    let presentValue = monthlyPayment * months;
    let futureValue = presentValue * Math.pow(interestRate, months);
    return futureValue.toFixed(2);
  }

  //US currency converter
  static convertToCurrency(field) {
    let currencyFormatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    return currencyFormatter.format(field);
  }
}
