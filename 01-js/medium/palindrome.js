/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/


function reverseAdnClear(str) {
  const String = str.split("");
  const reversedString = String.reverse();
  const newString = reversedString.join("");;
  const pattern = /["!?,.:{} ]/g;
  const cleanedString = newString.replace(pattern, "").toLowerCase();
  return cleanedString;
};

function cleanString(str) {
  const pattern = /["!?,.:{} ]/g;
  const cleanedString = str.replace(pattern, "").toLowerCase();
  return cleanedString;
}

function isPalindrome(str) {
  string1 = reverseAdnClear(str);
  string2 = cleanString(str);
  

  if (string1 === string2) {
    return true;
  } else {
    return false;
  }
}



module.exports = isPalindrome;

