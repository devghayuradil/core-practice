const looping = () => {
  for (var i = 0; i < 5; i++) {
    const log = (j) => {
      setTimeout(() => {
        console.log(j);
      }, 0);
    };
    log(i)
  }
};

looping();
