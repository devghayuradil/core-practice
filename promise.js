const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 successful");
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2 successful");
  }, 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p3 successful");
  }, 2000);
});


Promise.all([p1,p2,p3]).then((res) => {

    console.log(res)

}).catch((err) => {
    console.log(err)
})
