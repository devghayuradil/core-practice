// week 1 day 1
// task 1
// const sumUpTo = (num) => {
//     let sum = 0
//     for(let i = 1; i <= num; i++){
//         sum = sum + i
//     }
//     return sum
// }
// console.log(sumUpTo(6));

// task 2
// for(let i = 10; i > 0; i--){
//     console.log(i)
// }

// task 3
// const square = (num) => num * num
// console.log(square(4));

// task 4

// const trianglePattern = (n) => {
//     for(let i = 0; i < n; i++){
//         let result = ''
//         for(let j = 0; j <= i; j++){
//             result += '*'
//         }
//         console.log(result)
//     }
// }

// trianglePattern(4)

// // week 1 day 2
// // Task 1
// const checkEvenOdd = (num) => num % 2 === 0 ? 'even' : 'odd'
// console.log(checkEvenOdd(3));

// // Task 2
// const factorial = (num) => {
//     let factorialSum = 1
//     for(let i = 1; i <= num; i++){
//         factorialSum = factorialSum * i
//     }
//     return factorialSum
// }

// console.log(factorial(3))

// Task 3
// const divisibleNumber = (n) => {
//     for(let i = 1; i <= n; i++){
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log(i)
//         }
//     }
// }

// divisibleNumber(9)

// bonus task
// const pyramid = (n) => {
//     for(let i = 1; i <= n; i++){
//         let result = ''
//         for(let j = 1; j <= i; j++){
//             result += i
//         }
//         console.log(result);
//     }
// }
// pyramid(5)

// // week 1 day 3
// // task 1
// const printRectangle = (rows, columns) => {
//     for(let i = 0; i < rows; i++){
//         let result = ''
//         for(let j = 0; j < columns; j++){
//             result += '*'
//         }
//         console.log(result);
//     }
// }
// printRectangle(5, 5)

// // task 2
// const fizzBuzz = (num) => {
//     for (let i = 1; i <= num; i++) {
//         switch (true) {
//             case i % 3 === 0 && i % 5 === 0:
//                 console.log("FizzBuzz");
//                 break;
//             case i % 3 === 0:
//                 console.log("Fizz");
//                 break;
//             case i % 5 === 0:
//                 console.log("Buzz");
//                 break;
//             default:
//                 console.log(i);
//         }
//     }
// }
// fizzBuzz(30)

// // task 3
// const countEvenOdd = (num) => {
//     let even = 0;
//     let odd = 0;
//     for (let i = 1; i <= num; i++) {
//         if (i % 2 === 0) {
//             even++
//         } else {
//             odd++
//         }
//     }
//     console.log(`even: ${even} odd: ${odd}`);
// }

// countEvenOdd(13)

// // bonus task
// const hollowRectanglePattern = (rows, columns) => {
//     for (let i = 1; i <= rows; i++) {
//         let result = ''
//         for (let j = 1; j <= columns; j++) {
//             i === 1 || i === rows ? result += '*' : result += j === 1 || j === columns ? '*' : ' '
//         }
//         console.log(result);
//     }
// }
// hollowRectanglePattern(3, 3)

// week 1 day 4
// task 1
// const settimeoutVarLat = () => {

//     for(var i = 1; i < 6; i++){
//         setTimeout(() => {
//             console.log(i)
//         }, 0)
//     }

// for(let i = 1; i <= 5; i++){
//     setTimeout(() => {
//         console.log(i)
//     }, 0)
// }

// }
// settimeoutVarLat()
/*var version: var is function scope variable when we use var it hosted in global and it point the same reference of the variable so 
when setTimeout function run it will remember the the i variable in var case the variable have only one version so its remember the
the reference of i forloop first run in callstack so its runs all iteration while setTimeout its browser api its handle by event loop 
when the eventloop give the function to the callstack while for loop was finished so thats why its print 66666

let version: let is block scope variable everytime its create with new reference of variable so when the setTimeout function run 
its remember the new version of i thats why so its print right output 12345 */

// // task 2
// const createCounter = () => {
//     let count = 0
//     return function(){
//         return ++count
//     }
// }
// const counter = createCounter()
// console.log(counter())
// console.log(counter())
// console.log(counter())

// // task 3
// const multiplyBy = (num) => {
//     return function(num2){
//         return num2 * num
//     }
// }
// const multiplyByThree = multiplyBy(5);
// const multiplyByTwo = multiplyBy(5);
// console.log(multiplyByThree(3));
// console.log(multiplyByTwo(2));

// // bonus task
// (function(){
//     const secret = "hidden"
//     console.log("hello")
// })()
// console.log(secret);
// const findMax = (arr) => {
//   const max = arr.reduce((acc, curr) => {
//     if (curr > acc) {
//       acc = curr;
//     }
//     return acc;
//   });
//   return max
// };

// console.log(findMax([3, 66, 7, 8, 36, 2, 35]));
// week 2 day 1
// task 1
// const getMaximumNumber = (arr) => {
//     let max = arr[0]
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i]
//         }
//     }
//     return output
// }
// console.log(getMaximumNumber([13, 7, 14, 9, 4]))

// task 2
// const reverseArr = (arr) => {
//     let output = []
//     for(let i = arr.length - 1; i >= 0; i--){
//         output.push(arr[i])
//     }
//     return output
// }
// console.log(reverseArr([1,2,3]))

// task 3
// const filterEvenNumbers = (arr) => {
//     let output = []
//     for(let i = 0; i < arr.length; i++){
//         if (arr[i] % 2 === 0) {
//             output.push(arr[i])
//         }
//     }
//     return output
// }

// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));
// const sumOfArr = (arr) => {
//     const sum = arr.reduce((acc,curr) => {
//         acc += curr
//         return acc
//     })
//     return sum
// }
// console.log(sumOfArr([1,2,3]));
// bonus task
// const sumArray = (arr) => {
//     let sum = 0
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     return sum
// }

// console.log(sumArray([1,2,3]));

// week 2 day 2
// task 1
// const countVowels = (val) => {
//     let output = 0
//     let vowels = 'aeiou'
//     for(let char of val){
//         if (vowels.includes(char)) {
//             output++
//         }
//     }
//     return output
// }
// console.log(countVowels("hello world"))

// task 2
// const reverseString = (val) => {
//     const textArr = val.split('')
//     let output = []

//     for(let i = textArr.length - 1; i >= 0; i--){
//         output.push(textArr[i])
//     }

//     return output.join('')
// }
// console.log(reverseString("apple mango"))

// task 3
// const reverseString = (val) => {
//     let reverse = ''
//     for(let i = val.length - 1; i >= 0; i--){
//         reverse += val[i]
//     }
//     return reverse === val
// }
// console.log(reverseString("madam"))

// Bonus task
// const capitalizeFirstLetter = (val) =>{
//     const words = val.split(' ')
//     let output = []
//     for(let i = 0; i < words.length; i++){
//         output.push(words[i].charAt(0).toUpperCase() + words[i].slice(1))
//     }
//     return output.join(' ');
// }
// console.log(capitalizeFirstLetter("hello world"));

// week 2 day 3
// task 1
// const findUserByName = (data) => {
//     const finalData = data.find(item => {
//         return item.name.toLowerCase() === 'ali'
//     })

//     return finalData
// }
// console.log(
//     findUserByName([
//         { name: "Ahmed", age: 22 },
//         { name: "Ali", age: 25 },
//         { name: "Sara", age: 30 },
//     ]))

// task 2
// let data = []
// const addUser = (user) => {
//     data.push(user);
//     return [...data]
// }
// console.log(addUser({ name: "Zara", age: 21 }))
// console.log(addUser({ name: "ali", age: 21 }))

// bonus task
// const sortUsers = (data) => {
//     const sorted = data.sort((a, b) => a.age - b.age)
//     return sorted
// }
// console.log(
//     sortUsers([
//         { name: "Ahmed", age: 42 },
//         { name: "Ali", age: 55 },
//         { name: "Sara", age: 30 },
//     ]))

// week 2 day 4
// task 1

// const convertObjectIntoArray = (obj) =>{
//     let output = Object.keys(obj).map(item => [item,obj[item]])
//     return output
// }

// console.log(convertObjectIntoArray({
//     name: "Ali",
//     age: 25,
//     city: "Lahore"
//   }))

// task 2
// const countLetters = (word) => {
//     let output = {}
//     for (const char of word.replace(/\s/g, '')) {
//         if (output[char]) {
//             output[char] += 1
//         } else {
//             output[char] = 1
//         }
//     }

//     return output
// }
// console.log(countLetters('   apple mango apple   '));

// task 3
// const merge = (obj1,obj2) => {
//     return {...obj1, ...obj2}
// }
// console.log(merge({ a: 1, b: 2 }, { c: 3, d: 4 }))

// bonus task
// const invert = (obj) => {
//     console.log(Object.entries(obj));
//     const output = Object.keys(obj).reduce((acc, curr) => {
//          acc[obj[curr]] = curr
//          return acc
//     }, {})
//     return output
// }

// console.log(invert({ a: 1, b: 2 }));

// week 3 day 1
// task 1
// const doubleEachNumber = (arr) => {
//     return arr.map(num => num * 2)
// }
// console.log(doubleEachNumber([1,2,3,4]));

// task 2
// const filterPositiveNumber = (arr) => {
//     return arr.filter(num => num > 0)
// }
// console.log(filterPositiveNumber([-2,-4,-5,1,0,2]));

// task 3
// const sumNumber = (arr) => {
//     return arr.reduce((acc, curr) => {
//         return acc + curr
//     }, 0)
// }
// console.log(sumNumber([1,2,3]));

// bonus task
// const filterAndCapitalize = (arr) => {
//     return arr.filter(item => item.length > 3).map(item => item.charAt(0).toUpperCase() + item.slice(1))
// }
// console.log(filterAndCapitalize(["ali", "zara", "umair", "noor"]));

// week 3 day 2
// task 1
// const findUser = (arr) => arr.find(item => item.name.toLowerCase() === 'ali' )

// console.log(findUser([
//     { name: "Ahmed", age: 22 },
//     { name: "Ali", age: 25 },
//     { name: "Sara", age: 30 },
//   ]))
// Output: { name: "Ali", age: 25 }

// task 2
// const countEven = (arr) => arr.filter(item => item % 2 === 0).length

// console.log(countEven([1, 2, 3, 4, 5, 6]))
// Output: 3

// task 3
// const capitalizeNames = arr => arr.map(item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())

// console.log(capitalizeNames(["ali", "zara", "noor"]))
// Output: ["Ali", "Zara", "Noor"]

// bonus task
// const getOldestUser = (arr) => arr.reduce((acc, curr) => {
//     return acc.age > curr.age ? acc : curr
// }, {})

// console.log(getOldestUser([
//     { name: "Ahmed", age: 42 },
//     { name: "Ali", age: 55 },
//     { name: "Sara", age: 30 },
// ]))
// Output: { name: "Ali", age: 55 }

// week 3 - day 3
// task 1
// const filterUsersByCity = (users, city) => users.filter(user => user.city.toLowerCase() === city.toLowerCase())

// console.log(filterUsersByCity([
//     { name: "Ali", city: "Lahore" },
//     { name: "Sara", city: "Karachi" },
//     { name: "Ahmed", city: "Lahore" }
// ], "karachi"));

// task 2
// const averageAge = (users) => users.reduce((acc, curr) => acc + curr.age , 0) / users.length

// console.log(averageAge([
//     { name: "Ali", age: 25 },
//     { name: "Sara", age: 30 },
//     { name: "Ahmed", age: 35 }
//   ]));

// task 3
// const formatUsers = (users) => users.map(item => `${item.name} is ${item.age} years old`)

// console.log(formatUsers([
//     { name: "Ali", age: 25 },
//     { name: "Sara", age: 30 }
// ]));

// bonus task
// this is not working by push i dont know why explain me
// const groupByCity = (users) => {
//     return users.reduce((acc, curr) => {

//         if (acc[curr.city]) {
//             acc[curr.city] = acc[curr.city].push(curr)
//             console.log(acc[curr.city]);
//         } else {
//             acc[curr.city] = [curr]
//         }

//         return acc
//     }, {})
// }
// this is working by rest operator
// const groupByCity = (users) => {
//     return users.reduce((acc, curr) => {
//         if (acc[curr.city]) {
//             acc[curr.city] = [...acc[curr.city], curr]
//         } else {
//             acc[curr.city] = [curr]
//         }
//         return acc
//     }, {})
// }

// console.log(groupByCity([
//     { name: "Ali", city: "Lahore" },
//     { name: "Ghayur", city: "Lahore" },
//     { name: "Zara", city: "Karachi" },
//     { name: "ayaz", city: "Sukkur" },
//     { name: "Haris", city: "Karachi" },
//     { name: "Ahmed", city: "Lahore" }
// ]));

// week 3 - day 4
// task 1
// const flattenArray = (arr) => {
//     return arr.flat(10);
// }
// console.log(flattenArray([1, [2, [3, 4], 5]]));

// task 2
// const getUserNames = (users) => users.map(item => item.name)

// console.log(getUserNames([
//     { name: "Ali", age: 22 },
//     { name: "Zara", age: 25 }
//   ]));

// task 3
// const groupCity = (users) => {
//     return users.reduce((acc, curr) => {
//         if (acc[curr.city]) {
//             acc[curr.city] = [...acc[curr.city], curr]
//         } else {
//             acc[curr.city] = [curr]
//         }
//         return acc
//     }, {})
// }
// const getTopCity = (users) => {
//     const groupCities = groupCity(users)
//     let max = 0
//     let topCity = ""
//     for (const city in groupCities) {
//         if (groupCities[city].length > max) {
//             topCity = city
//             max = groupCities[city].length
//         }
//     }
//     return topCity
// }

// console.log(getTopCity([
//     { name: "Ali", city: "Lahore" },
//     { name: "Sara", city: "Karachi" },
//     { name: "Sara", city: "Karachi" },
//     { name: "Sara", city: "Karachi" },
//     { name: "Ahmed", city: "Lahore" },
// ]));

// bonus task
// const countUsersByCity = (users) => {
//     return users.reduce((acc, curr) => {
//         acc[curr.city] = (acc[curr.city] || 0) + 1
//         return acc
//     }, {})
// }

// console.log(countUsersByCity([
//     { name: "Ali", city: "Lahore" },
//     { name: "Sara", city: "Karachi" },
//     { name: "ghayur", city: "Sukkur" },
//     { name: "Ahmed", city: "Lahore" }
//   ]))

// week 4 - day 1
// task 1
// const cleanUsernames = (users) => users.filter((item) => item.replaceAll(' ', '').length <= 4).map(item => item.replaceAll(' ', '').toLowerCase())

// console.log(cleanUsernames(["  ALI ", " Zara", "Mo", "   UMAIR  ", "noor"]));
// // Output: ["ali", "zara", "umair", "noor"]
