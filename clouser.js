// const a = () => {
//   let n = 0;
//   return () => {
//     console.log(n++);
//   };
// }
// let c = a();
// c();

function a() {
  for (var index = 1; index <= 5; index++) {
    function close(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 1000);
    }
    close(index);
  }
}

a();
