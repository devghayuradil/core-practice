// const reverseString = (str) => {
//   let reversed = '';

//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }

//   return reversed;
// };

// console.log(reverseString('hello')); // Output: "olleh"

// ========= find second largest number ==============
// const findSecondLargestNumber = (arr) => {
//     let maxNumber = -Infinity
//     let secondMax = -Infinity

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > maxNumber){
//             secondMax = maxNumber
//             maxNumber = arr[i]
//         } else if(arr[i] > secondMax && arr[i] !== maxNumber){
//             secondMax = arr[i]
//         }
//     }

//     return secondMax
// }

// console.log(findSecondLargestNumber([10, 5, 8, 20, 15]))

// ===================== count vowels ================
// const countVovels = (str) => {
//   let count = 0;
//   for (let char of str) {
//     if (
//       char === "a" ||
//       char === "A" ||
//       char === "e" ||
//       char === "E" ||
//       char === "i" ||
//       char === "I" ||
//       char === "o" ||
//       char === "O" ||
//       char === "u" ||
//       char === "U"
//     ) {
//       count++;
//     }
//   }
//   return count;
// };

// console.log(countVovels("hellO wOrld"));

// ================= Factorial Number ================
// const factorial = (num) => {
//   let facNumber = 1;
//   for (let i = num; i > 0; i--) {
//     facNumber = facNumber * i
//   }
//   return facNumber;
// };

// console.log(factorial(0));

// ================== prime number or not prime number ==================
// const isPrimeNumber = (num) => {
//   if(num <= 1) return "number is not prime"

//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return "number is not prime";
//     }
//   }
//   return "number is prime"
// };

// console.log(isPrimeNumber(2));

// =================== get Even Numbers ==================
// const getEvenNumbers = (arr) => {
//     let evenNmbers = []
//     for(let i = 0; i < arr.length; i++){
//         if (arr[i] % 2 !== 0) {
//             evenNmbers.push(arr[i])
//         }
//     }
//     return evenNmbers
// }

// console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]))

// ================= find Max Number =====================
// const findMaxNumber = (arr) => {
//   let maxNumber = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > maxNumber) {
//       maxNumber = arr[i];
//     }
//   }
//   return maxNumber;
// };

// console.log(findMaxNumber([3, 8, 4, 12, 7]));

// ================= check string palindrome ==============
// const isPalindrome = (str) => {
//   let reverseStr = "";
//   let lowerStr = str.toLowerCase()
//   for (let i = lowerStr.length - 1; i >= 0; i--) {
//     reverseStr += lowerStr[i];
//   }
//   return lowerStr === reverseStr;
// };

// console.log(isPalindrome("Madam")); // ✅ true
// console.log(isPalindrome("Level")); // ✅ true
// console.log(isPalindrome("hxaellh")); // ❌ false

// ================ find mising number ==================
// const findMissingNumber = (arr) => {
//   arr.sort((a, b) => a - b);
//   for(let i = 0; i < arr.length - 1; i++){
//     if ((arr[i] + 1) !== arr[i+1]) {
//         return arr[i] + 1
//     }
//   }
//   return null
// };

// console.log(findMissingNumber([11,13,14,15]));

// =============== Count Words =====================
// const countWords = (str) => str.trim().replace(/\s+/g, ' ').split(' ').length
// console.log(countWords("Hello world"))
// console.log(countWords("   JavaScript    is   awesome   "))
// console.log(countWords("I am learning to code"))

// ================== remove Duplicates =================
// const removeDuplicates = (arr) => {
//   const uniqueArr = arr.reduce((acc, curr) => {
//     if (!acc.includes(curr)) {
//       acc.push(curr);
//     }
//     return acc;
//   }, []);
//   return uniqueArr;
// };

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// console.log(removeDuplicates(["apple", "banana", "apple", "orange"]))

// ============= first none repeating char ==================
// const firstNonRepeatingChar = (str) => {
//   let seen = {};
//   for (let char of str) {
//     seen[char] = (seen[char] || 0) + 1;
//   }
//   for (let char of str) {
//     if (seen[char] === 1) {
//       return seen[char];
//     }
//   }

//   return "None";
// };

// console.log(firstNonRepeatingChar("abaccdeff")); // "b"
// console.log(firstNonRepeatingChar("aabbcc")); // "None"
// console.log(firstNonRepeatingChar("hello")); // "h"

// ================= again find second largest number but challenging ===================
// const findSecondLargest = (arr) => {
//   let maxNumber = -Infinity;
//   let secondMax = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > maxNumber) {
//       secondMax = maxNumber;
//       maxNumber = arr[i];
//     } else if (arr[i] < maxNumber && arr[i] > secondMax) {
//       secondMax = arr[i];
//     }
//   }
//   return secondMax !== -Infinity ? secondMax : "no second largest number";
// };

// console.log(findSecondLargest([33, 21, 81, 22, 12, 21, 22, 10])); // 33
// console.log(findSecondLargest([10, 10, 10, 9])); // 9
// console.log(findSecondLargest([4, 4, 4])); // No second largest
// console.log(findSecondLargest([-5, -2, -8])); // -5 ✅

// ================== Find All Pairs That Sum to a Target =================
// const findPairs = (arr, target) => {
//   arrWithPairs = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         arrWithPairs.push([arr[i], arr[j]]);
//       }
//     }
//   }
//   return arrWithPairs;
// };

// console.log(findPairs([2, 4, 3, 5, 7, 8, 1], 9));
// ================== Find All Pairs That Sum to a Target (optimized version) =================
// const findPairs = (arr, target) => {
//   let seen = new Set();
//   let result = new Set();

//   for(let num of arr) {
//     let complement = target - num;
//     if (seen.has(complement)) {
//         let pair = [complement, num].sort((a, b) => a - b).toString()
//         result.add(pair)
//     }
//     seen.add(num)
//   }
//   return Array.from(result).map(item => item.split(',').map(Number))
// };

// console.log(findPairs([2, 4, 3, 5, 7, 8, 1], 9));

// =============== Find All Duplicates (without Set) ================
// const findAllDuplicates = (arr) => {
//   const count = {};
//   const result = [];

//   for (let num of arr) {
//     count[num] = (count[num] || 0) + 1;
//   }

//   for (let num in count) {
//     console.log(num);
//     if (count[num] > 1) {
//       result.push(Number(num));
//     }
//   }
//   console.log(count);
//   return result;
// };

// console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1]))

// =============== Find All Duplicates (with Set) ================
// const findAllDuplicates = (arr) => {
//   let seen = new Set();
//   let duplicates = new Set();

//   for (let num of arr) {
//     seen.has(num) ? duplicates.add(num) : seen.add(num);
//     // if (!seen.has(num)) {
//     //     seen.add(num)
//     // } else {
//     //     duplicates.add(num)
//     // }
//   }
//   return Array.from(duplicates);
// };

// console.log(findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));

// ==================== Find the Majority Element ==============
// const findMajorityElement = (arr) => {
//   const count = {};
//   const majorityCount = Math.floor(arr.length / 2);

//   for (let num of arr) {
//     count[num] = (count[num] || 0) + 1;

//     if (count[num] > majorityCount) {
//       return Number(num);
//     }
//   }

//   return "No Majority Element";
// };

// console.log(findMajorityElement([4, 4, 4, 2, 4])); // 4
// console.log(findMajorityElement([1, 2, 3, 4]));    // No Majority Element

// ================  Move All Zeros to End ==============
// const moveZeros = (arr) => {
//   let index = 0;
//   for (let num of arr) {
//     if (num !== 0) {
//       arr[index] = num;
//       index++;
//     }
//   }
//   while (index < arr.length) {
//     arr[index] = 0;
//     index++;
//   }
//   return arr;
// };

// console.log(moveZeros([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]
// console.log(moveZeros([1, 0, 2, 0, 0, 3, 4])); // [1, 2, 3, 4, 0, 0, 0]
// ================= Remove Duplicates from Sorted Array (in-place) =======================

// const removeDuplicates = (arr) => {
//   let i = 0
//   for(let j = 1; j < arr.length; j++){
//     if (arr[i] !== arr[j]) {
//         i++
//         arr[i] = arr[j]
//     }
//   }
//   return i + 1
// };

// let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
// let count = removeDuplicates(arr)
// console.log(arr.slice(0, count))

// console.log(removeDuplicates([1, 1, 2])); // Output: 2 (modified array: [1,2])
// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // Output: 5 (modified array: [0,1,2,3,4])

// ============== first non repeating char ==============
// const firstNonRepeatingChar = (str) => {
//   let seen = {};
//   for (let char of str) {
//     seen[char] = (seen[char] || 0) + 1;
//   }
//   for (let char of str) {
//     if (seen[char] === 1) {
//       return char;
//     }
//   }
//   return "none";
// };

// console.log(firstNonRepeatingChar("aabbcdd"));

// console.log(firstNonRepeatingChar("aabbcc"));

// console.log(firstNonRepeatingChar("abcd"));

// ============= Find the Missing Number in an Array ===============
// const findMissingNumber = (arr) => {
//   let n = arr.length;
//   let expectedSum = (n * (n + 1)) / 2;
//   let actualSum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     actualSum += arr[i];
//   }
//   return expectedSum - actualSum;
// };
// console.log(findMissingNumber([0, 1]));

// ================ find longest Words ===================
// const findLongestWord = (str) => {
//   let text = str.replace(/[^a-zA-Z0-9\s]|_/g, "");
//   let wordsArr = text.split(" ");
//   let longestWord = wordsArr[0];
//   for (let word of wordsArr) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// };

// console.log(findLongestWord("The quick brown fox j,umps over the lazy dog"));
// // Output: "jumps"

// console.log(findLongestWord("I love programming in JavaScript"));
// // Output: "programming"

// ============ Reverse Only Letters (Leetcode Easy - Logic Building Focused) ================
// function isAlphabet(char) {
//   return /^[a-zA-Z]$/.test(char);
// }
// const reverseOnlyLetters = (str) => {
//   let textArr = str.split("");
//   let i = 0;
//   let j = textArr.length - 1;
//   while (i < j) {
//       if (!isAlphabet(textArr[i])) {
//           i++;
//     } else if (!isAlphabet(textArr[j])) {
//       j--;
//     } else {
//       // let temp = textArr[i]
//       // textArr[i] = textArr[j]
//       // textArr[j] = temp
//       [textArr[i], textArr[j]] = [textArr[j], textArr[i]];
//       i++;
//       j--;
//     }
//     console.log(i,"i", j,"j");
//   }
//   return textArr.join('')
// };

// console.log(reverseOnlyLetters("s1c3@ba!z")); //"z1a3@bc!s"

// ================= find the duplicates arr ==============
// const findDuplicates = (arr) => {
//   if (arr.length <= 1) return [];
//   let db = {};
//   let result = [];
//   for (let char of arr) {
//     db[char] = (db[char] || 0) + 1;
//   }

//   for (let char in db) {
//     if (db[char] > 1) {
//       result.push(Number(char));
//     }
//   }
//   return result;
// };

// console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])); // Output: [2, 3]
// console.log(findDuplicates([1, 1, 2])); // Output: [1]
// console.log(findDuplicates([1])); // Output: []

// =================== Two Sum Variation ===================
const findPairs = (arr, target) => {
  let db = {};
  let result = [];
  for (let num of arr) {
    let com = target - num;
    if (db[com]) {
      let pair = [com, num].sort((a, b) => a - b);
      result.push(pair);
    }
    db[num] = true;
  }
  console.log(db);
  return result;
};

console.log(findPairs([2, 3, 3, 5, 7, -1, 0,4], 6));

// =========== move all zeros at the end =============
// const moveZeros = (arr) => {
//   let index = 0;
//   for (let num of arr) {
//     if (num !== 0) {
//       arr[index] = num;
//       index++;
//     }
//   }
//   while (index < arr.length) {
//     arr[index] = 0;
//     index++;
//   }
//   return arr
// };

// console.log(moveZeros([0, 1, 0, 3, 12]));

// ================= Intersection of Two Arrays =============
// const intersection = (arr1, arr2) => {
//   let seen = {};
//   let result = [];
//   for (let num of arr1) {
//     if (!seen[num] && arr2.includes(num)) {
//       result.push(num);
//       seen[num] = true;
//     }
//   }
//   return result;
// };

// // Example 1
// console.log(intersection([1, 2, 2, 1], [2, 2]));
// // Output: [2]

// // Example 2
// console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
// // Output: [4, 9]

// const RemoveDup = (arr) => {
//     let newArray = [];
//     let seen = {}
//     for (const element of arr) {
//       console.log(!seen[element]);
//       if (!seen[element]) {
//         seen[element] = true
//         newArray.push(element)
//       }
//     }


//     return newArray
// };

// console.log(RemoveDup([2, 2, 3, 4, 5, 3, 4]));

// const isPalindrome = (str = "") => {
//   if (str.length <= 1) {
//     return "please Enter a valid string"
//   }

//   let reverseStr = ""
//   for(let i = str.length - 1; i >= 0; i--){
//     reverseStr += str.charAt(i)
//   }
//   return str.toLowerCase() === reverseStr.toLocaleLowerCase() ? `${str} is palindrome` : `${str} is not palindrome`
// }

// console.log(isPalindrome("hel"));
