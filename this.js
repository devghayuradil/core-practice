const obj = {
  val: 10,
  x: () => {
    console.log(this);
  },
};
obj.x();
