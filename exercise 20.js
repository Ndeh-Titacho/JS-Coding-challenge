//Rotate array one position to the left
function rotateLeft(arr) {
  var last = arr.shift();
  arr.push(last);
  return arr;
}
let arr = [4, 8, 10];
let ans = rotateLeft(arr);
console.log(ans);
