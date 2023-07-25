//function to merge two arrays and print final array
function mergeArrays(s1, s2) {
  let newArray = [];
  for (let el of s1) {
    newArray.push(el);
  }
  for (let el of s2) {
    newArray.push(el);
  }
  return newArray;
}
let s1 = [1, 2, 3, 4];
let s2 = [5, 6, 7, 8];
let ans = mergeArrays(s1, s2);
console.log(ans);
