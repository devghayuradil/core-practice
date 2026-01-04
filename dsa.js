// const sumArray = (arr) => {
//   let sum = 0;
//   for (let index = 0; index < arr.length; index++) {
//     sum += arr[index];
//   }
//   return sum;
// };

// console.log(sumArray([2, 4, 6]));

// const findMax = (array) => {
//   let maxNumber = array[0];
//   for (let index = 0; index < array.length; index++) {
//     if (array[index] > maxNumber) {
//       maxNumber = array[index];
//     }
//   }
//   return maxNumber;
// };

// console.log(findMax([-3, -7, -2, -9, -5]));

// const hasEven = (array) => {
//   for (let index = 0; index < array.length; index++) {
//     if (array[index] % 2 === 0) {
//       return true;
//     }
//   }
//   return false;
// };

// console.log(hasEven([1, 3, 5]));

// const reverseString = (str) => {
//   let newStr = "";
//   for (let index = str.length - 1; index >= 0; index--) {
//     newStr += str[index];
//   }
//   return newStr;
// };

// console.log(reverseString("hello"));

// const isPalindrome = (str) => {
//   let left = 0;
//   let right = str.length - 1;

//   while (left < right) {
//     if (str[left] !== str[right]) {
//       return false;
//     }
//     left++
//     right--
//   }

//   return true;
// };

// console.log(isPalindrome("mavam"));

// const frequencyCounter = (arr) => {
//   let freq = {};
//   for (const element of arr) {
//     freq[element] = freq[element] + 1 || 1;
//   }
//   return freq;
// };

// console.log(frequencyCounter([1, 2, 3, 4, 5, 6, 3, 1, 2]));

// const firstNonRepeating = (arr) => {
//     let freq = {}
//     for(let element of arr){
//         freq[element] = freq[element] + 1 || 1
//     }

//     for (const element of arr) {
//         if (freq[element] === 1) {
//             return Number(element)
//         }
//     }
//     return null
// }

// console.log(firstNonRepeating([4,2]));

// const firstDuplicate = (arr) => {
//   let seen = {};
//   for (let element of arr) {
//     if (seen[element]) {
//       return element;
//     }
//     seen[element] = true;
//   }
//   return null;
// };

// console.log(firstDuplicate([5, 3, 2, 5, 3, 2]));

