//
// Title: Assignment 2.2
// Author: Professor Kumar
// Date: 4 June 21
// Modified By: Ferdinand "Papo" Detres Jr
// Description: This week's project has us checking for Palindromes with Javascript
// Code Attributions: The classes and id's were taken from the CSS and JS instructions styleguide provided by Bellevue.
//

console.log("hello world");

// Gets todays date which will be applied to the results card
function getTodaysDate() {
  return new Date().toLocaleDateString("en-us");
}

//functiont that returns the length of the string
function getLength(str) {
  return str.length;
}

// splits the string into a character array
// reverse string function is called except they are split and have to be rejoined into a single string
// combines the string into one and its output in the return
function reverse(str) {
  let string = [...str];
  string.reverse();
  let newString = string.join("");
  //outputs the reverse string of what was typed
  return newString;
}

function isPalindrome(str) {
  if (reverse(str) === str) {
    return true;
  } else return false;
}


//button function Check Phrase
function button() {
    let txtPhrase = (document.getElementById("txtPhrase")).value;
  let assignResults = document.getElementById("assign-results");
  let today = getTodaysDate();
  let len = getLength(txtPhrase);
  let reversedPhrase = reverse(txtPhrase);

  //this function checks if typed word is a Palindrome

//   isPalindrome(txtPhrase);

  //new card results
  let header = `Date: ${today}
  <br>
  Original Phrase: ${txtPhrase}
  <br>
  Reversed Phrase : ${reversedPhrase}
  <br>
  Phrase Length: ${len}
  `
 
 let results = isPalindrome(txtPhrase.toLowerCase());

     if(results === true) {
         document.getElementById("assign-results-text").innerHTML = txtPhrase + " <b><u>is</u></b> a palindrome!";
     }
     else {
         document.getElementById("assign-results-text").innerHTML = txtPhrase + " <b><u>is not</u></b> a palindrome!";
     }
 assignResults.innerHTML = header;
};
