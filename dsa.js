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

// const removeDuplicates = (array) => {
//   let count = 0;

//   for (let index = 1; index < array.length; index++) {
//     if (array[count] !== array[index]) {
//         count++
//         array[count] = array[index]
//     }
//   }

//   for(let secIndex = count + 1; secIndex < array.length; secIndex++){
//     array[secIndex] = "_"
//   }

//   return {
//     k: count + 1,
//     nums: array,
//   };
// };
// result = removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);

// console.log(result.k, result.nums);
// let nums = [0,1,2,2,3,0,4,2]

// const removeElement = (nums, val) => {
//   let count = 0;
//   for (let index = 0; index < nums.length; index++) {
//     if (nums[index] !== val) {
//         nums[count] = nums[index]
//         count++
//     }
//   }
//   return count
// };

// console.log(nums.splice(0,removeElement(nums, 2)));
// console.log(removeElement(nums, 2));

// const reverseString = (s) => {
//   let left = 0;
//   let right = s.length - 1;
//   while (left < right) {
//     let temp = s[left];
//     s[left] = s[right];
//     s[right] = temp;
//     left++;
//     right--;
//   }
//   return s;
// };

// console.log(reverseString(["h", "e", "l", "l", "o"]));

// const maxProfit = (prices) => {
//   let minPrice = Infinity;
//   let maxProfit = 0;

//   for (let price of prices) {
//     if (price < minPrice) {
//       minPrice = price;
//     } else {
//       let profit = price - minPrice;
//       if (profit > maxProfit) {
//         maxProfit = profit;
//       }
//     }
//   }

//   return maxProfit;
// };

// console.log(maxProfit([8, 7, 15, 9, 10, 1]));

// const merge = (nums1, m, nums2, n) => {
//   console.log(nums1.length);
// };

// console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
// console.log(merge([1], 1, [], 0));
// console.log(merge([0], 0, [1], 1));

// const removeDubAndSort = (arr) => {
//   let validate = {};
//   let result = [];

//   // remove duplicates 
//   for (const value of arr) {
//     if (!validate[value]) {
//       validate[value] = true;
//       result.push(value);
//     }
//   }

//   // sort array 
//   for (let i = 0; i < result.length; i++) {
//     for (let j = i + 1; j < result.length; j++) {
//       if (result[i] > result[j]) {
//         let temp = result[i];
//         result[i] = result[j];
//         result[j] = temp;
//       }
//     }
//   }

//   return result;
// };

// console.log(
//   removeDubAndSort([
//     1, 2, 1, 2, 31, -1, 5, 1, 2, 4, 3, 6, 7, 5, 4, 7, 6, 8, 9, 7, 5, 4,
//   ])
// );

// const sort = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] > array[j]) {
//         let temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//       }
//     }
//   }

//   return array;
// };

// console.log(sort([5, 6, 4, 0, 3, 7, 8, 9, 1, 2]));
