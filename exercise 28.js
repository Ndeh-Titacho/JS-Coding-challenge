//function to calculate the sum of the first 100 prime numbers
function sumPrime() {
  let sum = 0;
  for (var i = 2; i <= 100; i++) {
    let d = i % 2;
    if (i == 2) {
      sum += i;
    } else {
      let d = i % 2;
      if (d != 0) {
        sum += i;
      }
    }
  }
  return sum;
}
console.log(sumPrime());
