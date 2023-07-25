//function to return the distinct elements of an array
function distinctElements(arr) {
  let distinctArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!arr.includes(arr[i]));
    distinctArr.push(arr[i]);
  }
  return distinctArr;
}
let arr = [-1, 2, 3, 4, 5, -1, 2];
console.log(distinctElements(arr));
