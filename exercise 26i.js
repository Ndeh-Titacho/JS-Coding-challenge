function getMissingNumbers(ar1, ar2) {
  let ar = ar1.filter((number) => !ar2.includes(number));
  return ar;
}
let ar1 = [1, 2, 3, 4, 6];
let ar2 = [1, 5, 7, 8, 9];
console.log(getMissingNumbers(ar1, ar2));
