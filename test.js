// function palindrome(num) {
//     let original = num;
//     let reverse = 0;

//     while (num > 0) {
//         let lastDigit = num % 10;
//         console.log(lastDigit);
//         reverse = reverse * 10 + lastDigit;
//         num = Math.floor(num / 10);
//     }

//     if (original === reverse)
//         return "Palindrome";
//     else
//         return "Not Palindrome";
// }

// console.log(palindrome(521));

// function wordCount(paragraph) {
//   const words = paragraph.toLowerCase().split(/\s+/);
//   const result = {};

//   for (let word of words) {
//     result[word] = (result[word] || 0) + 1;
//   }

//   return result;
// }

// const input = process.argv.slice(2).join(" ");
// console.log(wordCount(input));


const isAnagram = (str1,str2) => {

}

console.log(isAnagram("silent","listen"));