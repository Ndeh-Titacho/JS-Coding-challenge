//function to calculate the sum of numbers in a comma delimited string
function sum(s) {
  let ar = s.split(",");
  let sum = 0;
  for (let n of ar) {
    sum += parseFloat(n);
  }
  return sum;
}

console.log(sum("1.2,2.4,5,7.1"));
