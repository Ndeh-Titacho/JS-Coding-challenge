//function calculate the sum of the numbers in a jagged array
function sumJaggedArray(ar) {
  let sum = 0;
  for (let el of ar) {
    if (Array.isArray(el)) {
      el = sumJaggedArray(el);
    }
    sum += el;
  }
  return sum;
}
let ar = [1, 2, 4, [5, 5], [[3, 2], 35, 4], 7];
console.log(sumJaggedArray(ar));
