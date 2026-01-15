// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("p1 successful");
//     reject("p1 reject");
//   }, 3000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("p2 successful");
//     reject("p2 reject");
//   }, 1000);
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("p3 successful");
//     reject("p3 reject");
//   }, 2000);
// });

// Promise.any([p1,p2,p3]).then((res) => {

//     console.log(res)

// }).catch((err) => {
//     console.log(err)
// })

const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello");
  }, 100);
});

const checker = async () => {
  let dataFromFetch = await (
    await fetch("https://jsonplaceholder.typicode.com/posts")
  ).json();

  return dataFromFetch;
};

