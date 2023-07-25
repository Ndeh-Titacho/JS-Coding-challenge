//function to reverse and array
function reverseArray(arr) {
  let arr2 = [];
  for (let i = 5; i > 0; i--) {
    arr2.push(i);
  }
  return arr2;
}
let arr = [1, 2, 3, 4, 5];
let ans = reverseArray(arr);
console.log(ans);
