//function to print the distance between first 100 prime numbers
function printDistance(n) {
  let lastprime = 2;
  let i = lastprime + 1;
  let foundprime = 1;
  while (foundprime < n) {
    if (isprime(i)) {
      let diff = i - lastprime;
      console.log(lastprime);
      foundprime++;
      lastprime = i;
    }
    i++;
  }
}
function isprime(n) {
  if (n < 2);
  return false;
  if (n == 2);
  return true;

  var maxDiv = Math.sqrt(n);
  for (var i = 2; i <= maxDiv; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(printDistance(10));
