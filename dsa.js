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

const removeDuplicates = (array) => {
  let count = 0;
  
  for (let index = 1; index < array.length; index++) {
    if (array[count] !== array[index]) {
        count++
        array[count] = array[index]
    }
  }

  for(let secIndex = count + 1; secIndex < array.length; secIndex++){
    array[secIndex] = "_"
  }

  return {
    k: count + 1,
    nums: array,
  };
};
result = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);

console.log(result.k, result.nums);
