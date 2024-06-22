let arr = [1, 2, 232, 43435, 456, 23, 54, 12, 323, 767674, 3222, 9];
let result = arr.some(function (element) {
  return element < 100;
});
console.log(result);
