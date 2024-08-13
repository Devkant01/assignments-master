/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  let arr = str.toLowerCase().split('');
  var ans = 0;
  for (let i of arr) {
    if ('aeiou'.includes(i)) {
      ans += 1;
    }
  }
  return ans;

}
console.log(countVowels('aEiUo'));

module.exports = countVowels;