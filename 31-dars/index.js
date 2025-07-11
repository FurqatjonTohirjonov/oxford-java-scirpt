let arr = [1, 2, 4, 5, 3, 7, 5, 6, 5];
Array.prototype.f = function (value) {
  let s = this.filter((item) => item !== value);
  this.length = 0;
  this.push(...s);
};
arr.f(5)
arr.f(2)
arr.f(4)
arr.f(6)
console.log(arr);