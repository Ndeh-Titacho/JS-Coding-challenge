//rotate array one position to the right
arr = [4, 8, 10];
let ans = rotateRight(arr);
console.log(ans);

function rotateRight(arr) {
  let first = arr.pop();
  arr.unshift(first);
  return arr;
}
