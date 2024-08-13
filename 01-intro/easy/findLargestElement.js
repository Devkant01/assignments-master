/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {  //try using spread operator also ...numbers
    var ans = numbers[0];
    for (let i = 1; i < numbers.length ; i++){
        ans = (ans < numbers[i]) ? numbers[i] : ans;
    }
    return ans;

    // or just
    // return Math.max(...numbers);
}

// console.log(findLargestElement([3, 7, 2, 9, 1]));
// console.log(findLargestElement([3, 7, 2, 9, 1, 10, 20, 30]));
// console.log(findLargestElement([3, 7, 2, 9, 1, 10, 20, 30, 20, 50, 60]));




module.exports = findLargestElement;