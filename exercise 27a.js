var arr1 = distinctElemets([1, 2, 3, 6, -1, 2, 9, 7, 10, -1, 100]);
console.log(ar2);
function distinctElemets(arr1) {
  var ar2 = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!isInArray(arr1[i], ar2)) {
      ar2.push(arr1[i]);
    }
  }
  return ar2;
}

function isInArray(n, ar) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === n) return true;
  }
  return false;
}
